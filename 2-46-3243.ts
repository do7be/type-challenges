type FlattenDepth<T extends any[], K = 1, N extends any[] = []> = T extends []
? []
: N['length'] extends K
  ? T
  : T[0] extends any[]
    ? T extends [infer _, ...infer Rest]
      ? [...FlattenDepth<T[0], K, [...N, 0]>, ...FlattenDepth<Rest, K, N>]
      : [...FlattenDepth<T[0], K, [...N, 0]>]
    : T extends [infer _, ...infer Rest]
      ? [T[0], ...FlattenDepth<Rest, K, N>]
      : [T[0]]
