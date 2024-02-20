type Max<A extends number | string, B extends number | string, I extends any[] = []> = `${I['length']}` extends `${A}`
? B
: `${I['length']}` extends `${B}`
? A
: Max<A, B, [...I, any]>

type MaxWithNegative<A extends number, B extends number, AF = IsNegativeNumber<A>, BF = IsNegativeNumber<B>> = `${A}` extends `-${infer AD}` | `${infer AD}`
? `${B}` extends `-${infer BD}` | `${infer BD}`
  ? AF extends true
    ? BF extends true
      ? Max<AD, BD> extends AD ? B : A
      : B
    : BF extends true
      ? A
      : Max<AD, BD> extends AD ? A : B
  : never
: never

type IsNegativeNumber<T extends number> = number extends T
? never
: `${T}` extends `-${number}` ? true : false

type Hoge<T extends number, U extends number[]> = U extends [infer U0 extends number, ...infer UR extends number[]]
? T extends U0 ? Hoge<T, UR> : MaxWithNegative<T, U0> extends T ? [any, ...Hoge<T, UR>] : Hoge<T, UR>
: []

type CountReversePairs<T extends number[], N extends any[] = []> = T extends [infer T0 extends number, ...infer TR extends number[]]
? CountReversePairs<TR, [...N, ...Hoge<T0, TR>]>
: N['length']
