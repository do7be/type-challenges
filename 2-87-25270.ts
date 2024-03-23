type ExtractFromArray<T extends number[][], I extends number> = T extends [infer T0, ...infer TR extends any[]]
? I extends keyof T0
  ? [T0[I], ...ExtractFromArray<TR, I>]
  : []
: []

type Transpose<M extends number[][], I extends any[] = []> = M extends [infer M0 extends number[], ...infer MR]
? M0[‘length’] extends I[‘length’]
  ? []
  : [ExtractFromArray<M, I[‘length’]>, ...Transpose<M, [...I, any]>]
: []
