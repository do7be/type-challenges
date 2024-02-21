type FirstNumber<T extends string> = T extends '' ? '0' : T extends `${infer T0 extends string}${any}` ? T0 : never

type Rest<T> = T extends `${any}${infer TR}` ? TR : ''

type ReverseString<T extends string> = `${T}` extends `${infer T0}${infer TR}`
? `${ReverseString<TR>}${T0}`
: ''

type CreateArray<N extends string, I extends any[] = []> = `${I['length']}` extends N
? I
: CreateArray<N, [...I, any]>

type Add<A extends string, B extends string, Carry extends boolean = false> = [...CreateArray<A>, ...CreateArray<B>, ...(Carry extends true ? [any] : [])]['length']

type SumForLoop<A extends string, B extends string, Carry extends boolean = false, A0 extends string = FirstNumber<A>, AR extends string = Rest<A>, B0 extends string = FirstNumber<B>, BR extends string = Rest<B>> = `${A}${B}` extends ''
? Carry extends true
  ? '1'
  : ''
: Add<A0, B0, Carry> extends infer R extends number
? `${R}` extends `1${infer RR extends number}`
  ? `${RR}${SumForLoop<AR, BR, true>}`
  : `${R}${SumForLoop<AR, BR>}`
: never

type Sum<A extends string | number | bigint, B extends string | number | bigint, AD extends string = ReverseString<`${A}`>, BD extends string = ReverseString<`${B}`>> = ReverseString<Hoge<AD, BD>> extends infer R
? R extends ''
  ? '0'
  : R
: never
