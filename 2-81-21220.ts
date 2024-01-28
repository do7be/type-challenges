type ExcludeFunction<T extends () => any, U> = T extends T ? Equal<T, () => U> extends true ? never : T : never

type ArrowFunction<T extends unknown[]> = T extends [infer T0, ...infer TR]
? [() => T0, ...ArrowFunction<TR>]
: []

type PermutationsOfTuple<T extends unknown[], O extends () => unknown = ArrowFunction<T>[number], P = O> = [P] extends [never]
? []
: P extends P
? P extends () => infer P2
  ? [P2, ...PermutationsOfTuple<[], ExcludeFunction<O, P2>>]
  : never
: never
