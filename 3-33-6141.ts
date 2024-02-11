type AAA = [1, 2, 4, 8, 16, 32, 64, 128, 256]

type ReverseString<T extends string> = `${T}` extends `${infer T0}${infer TR}`
? `${ReverseString<TR>}${T0}`
: ''

type CA<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CA<N, [...I, any]>

type BinaryToArray<S extends string, I extends any[] = []> = S extends `${infer S0}${infer SR}`
? S0 extends '1'
  ? [...CA<AAA[I['length']]>, ...BinaryToArray<SR, [...I, any]>]
  : [...BinaryToArray<SR, [...I, any]>]
: []

type BinaryToDecimal<S extends string> = BinaryToArray<ReverseString<S>>['length']

/*

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]

*/
