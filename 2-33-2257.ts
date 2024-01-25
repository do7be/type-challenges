type MinusOne<T extends number, N extends any[] = []> = T extends 0
? -1
: `${T}` extends `${infer T0}${[...N, any]['length']}`
? `${T0}${N['length']}` extends `${infer U extends number}`
  ? U
  : never
: MinusOne<T, [...N, any]>
