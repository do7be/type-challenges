type BuildTuple<L extends number, T extends any[] = []> = T['length'] extends L ? T : BuildTuple<L, [...T, any]>;

type Length<T extends any[]> = T['length'] extends number ? T['length'] : never; // こうしないとAdd<A, B>がnumberではないというerrorになる

type Add<A extends number, B extends number> = Length<[...BuildTuple<A>, ...BuildTuple<B>]>

type Fibonacci<T extends number, I extends any[] = [0], F_Prev extends number = 0, F_Current extends number = 1> = I['length'] extends T
? F_Current
: Fibonacci<T, [...I, any], F_Current, Add<F_Prev, F_Current>>
