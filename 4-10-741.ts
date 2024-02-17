type Max<A extends number, B extends number, I extends any[] = []> = I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type AppendWithSort<N extends number, F, R extends number[]> = R extends [infer R0 extends number, ...infer RR extends number[]]
? Max<N, R0> extends (F extends true ? N : R0)
  ? [N, ...R]
  : [R0, ...AppendWithSort<N, F, RR>]
: [N]

type Sort<T extends number[], F = false, R extends number[] = []> = T extends [infer T0 extends number, ...infer TR extends number[]]
? Sort<TR, F, AppendWithSort<T0, F, R>>
: R
