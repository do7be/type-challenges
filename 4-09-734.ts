type CreateArray<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CreateArray<N, [...I, any]>

type Max<A extends number, B extends number, I extends any[] = []> = I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type Range<N, I extends any[], R extends any[]> = I['length'] extends N
? R
: Range<N, [...I, any], [...R, [...I, any]['length']]>

type InclusiveRange<Lower extends number, Higher extends number> = Max<Lower, Higher> extends Higher
? Range<Higher, CreateArray<Lower>, [Lower]>
: []
