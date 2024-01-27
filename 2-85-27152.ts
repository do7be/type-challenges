type Triangular<N extends number, S extends any[] = [], I extends any[] = []> = I['length'] extends N
? S['length']
: Triangular<N, [...S, ...I, any], [...I, any]>
