type UnionReplace<T, U extends [any, any][]> = U extends [infer U0 extends [any, any], ...infer UR extends [any, any][]]
? T extends U0[0]
  ? UnionReplace<Exclude<T, U0[0]> | U0[1], UR>
  : UnionReplace<T, UR>
: T
