type PercentageParser<A extends string> = A extends `+${infer B}` | `-${infer B}`
? A extends `${infer F}${infer C}`
  ? C extends `${infer N}%`
    ? [F, N, '%']
    : [F, B, ''] 
  : never
: A extends `${infer N}%`
  ? ['', N, '%']
  : ['', A, ''] 

// or
type PercentageParser<A extends string> = A extends `${infer F}${infer B}`
? F extends '+' | '-'
  ? B extends `${infer N}%`
    ? [F, N, '%']
    : [F, B, ''] 
  : A extends `${infer N}%`
    ? ['', N, '%']
    : ['', A, ''] 
: ['', '', '']
