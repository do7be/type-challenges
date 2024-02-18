// 末尾再帰しないver
type CreateArray<N extends number, I extends any[] = []> = I['length'] extends N
? []
: [any, ...CreateArray<N, [...I, any]>]

type Max<A extends number, B extends number, I extends any[] = []> = I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type Sub<A extends number, B extends number, I extends any[] = []> = [...CreateArray<B>, ...I]['length'] extends A
? I['length']
: Sub<A, B, [...I, any]>

type Subtract<M extends number, S extends number> = Max<M, S> extends M
? Sub<M, S>
: never
