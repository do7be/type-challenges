type Max<A extends number, B extends number, I extends any[] = []> = [A] extends [never]
? B
: [B] extends [never]
? A
: I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type Maximum<T extends any[], R extends number = never> = T extends [infer T0 extends number, ...infer TR]
? Maximum<TR, Max<T0, R>>
: R
