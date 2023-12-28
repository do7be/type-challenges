type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  K extends unknown[]  = [],
  Flag extends boolean = false,
> = T extends []
? K
: K['length'] extends End
? [...K, ...T]
: Flag extends true 
? T extends [infer T0, ...infer TRest]
  ? Fill<TRest, N, Start, End, [...K, N], Flag>
  : never
: K['length'] extends Start
? T extends [infer T0, ...infer TRest]
  ? Fill<TRest, N, Start, End, [...K, N], true>
  : never
: T extends [infer T0, ...infer TRest]
  ? Fill<TRest, N, Start, End, [...K, T0], Flag>
  : never
