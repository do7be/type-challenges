type PercentageParser<A extends string> = A extends `+${infer B}` | `-${infer B}`
? A extends `${infer F}${infer C}`
  ? C extends `${infer N}%`
    ? [F, N, '%']
    : [F, B, ''] 
  : never
: A extends `${infer N}%`
  ? ['', N, '%']
  : ['', A, ''] 
