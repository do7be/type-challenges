type XOR<S1 extends string, S2 extends string> = S1 extends S2
? '0'
: '1'

type ReverseString<T extends string> = `${T}` extends `${infer T0}${infer TR}`
? `${ReverseString<TR>}${T0}`
: ''

type Hoge<R1 extends string, R2 extends string> = R1 extends `${infer R10}${infer R1R}`
? R2 extends `${infer R20}${infer R2R}`
  ? `${Hoge<R1R, R2R>}${XOR<R10, R20>}`
  : `${Hoge<R1R, ''>}${XOR<R10, '0'>}`
: R2 extends `${infer R20}${infer R2R}`
? `${Hoge<'', R2R>}${XOR<'0', R20>}`
: ''

type BitwiseXOR<S1 extends string, S2 extends string> = Hoge<ReverseString<S1>, ReverseString<S2>>
