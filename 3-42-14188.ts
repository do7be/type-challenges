type EncodeType<S extends string, B extends string = '', I extends any[] = []> = S extends `${infer T}${infer R}`
? B extends '' | T
  ? `${EncodeType<R, T, [...I, any]>}`
  : `${I['length'] extends 1 ? '' : I['length']}${B}${EncodeType<R, T, [any]>}`
: B

type Repeat<S extends string, N extends number, I extends any[] = []> = I['length'] extends N
? ''
: `${S}${Repeat<S, N, [...I, any]>}`

type DecodeType<S extends string> = S extends `${infer N extends number}${infer T}${infer R}`
? `${Repeat<T, N>}${DecodeType<R>}`
: S extends `${infer T}${infer R}`
? `${T}${DecodeType<R>}`
: ''

namespace RLE {
  export type Encode<S extends string> = EncodeType<S>
  export type Decode<S extends string> = DecodeType<S>
}
