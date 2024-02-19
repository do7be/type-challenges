type Max<A extends number | string, B extends number | string, I extends any[] = []> = `${I['length']}` extends `${A}`
? B
: `${I['length']}` extends `${B}`
? A
: Max<A, B, [...I, any]>

type MaxWithNegative<A extends number, B extends number> = `${A}` extends `-${infer AD}` | `${infer AD}`
? `${B}` extends `-${infer BD}` | `${infer BD}`
  ? Max<AD, BD> extends AD ? A : B
  : never
: never

type IsNegativeNumber<T extends number> = number extends T
? never
: `${T}` extends `-${number}` ? true : false

enum Comparison {
  Greater,
  Equal,
  Lower,
}

type Comparator<A extends number, B extends number> = A extends B
? Comparison.Equal
: IsNegativeNumber<A> extends infer FA
  ? IsNegativeNumber<B> extends infer FB
    ? boolean extends FA | FB 
      ? FA extends true ? Comparison.Lower : Comparison.Greater
      : MaxWithNegative<A, B> extends A
        ? FA extends false ? Comparison.Greater : Comparison.Lower
        : FA extends false ? Comparison.Lower : Comparison.Greater
    : never
  : never  
