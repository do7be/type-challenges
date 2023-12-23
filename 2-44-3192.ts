type Reverse<T extends any[]> = T extends []
? []
: T extends [infer A, ...infer B]
  ? [...Reverse<B>, A]
  : [T[0]]
