type Chunk<T extends any[], K extends number, P extends any[] = []> = T extends []
? P extends []
  ? []
  : [P]
: T extends [infer T0, ...infer TR]
  ? P['length'] extends K
    ? [P, ...Chunk<TR, K, [T0]>]
    : [...Chunk<TR, K, [...P, T0]>]
  : [...P, T[0]]
