type CreateArray<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CreateArray<N, [...I, any]>

type PascalLine<I extends any[], J extends any[], B extends number[]> = J['length'] extends [...I, any]['length']
? []
: J['length'] extends 0 | I['length']
? [1, ...PascalLine<I, [...J, any], B>]
: J extends [any, ...infer JB]
? [[...CreateArray<B[JB['length']]>, ...CreateArray<B[J['length']]>]['length'], ...PascalLine<I, [...J, any], B>]
: []

type Pascal<N extends number, I extends any[] = [], B extends number[] = []> = I['length'] extends N
? []
: PascalLine<I, [], B> extends infer K extends number[]
? [K, ...Pascal<N, [...I, any], K>]
: []
