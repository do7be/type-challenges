type LengthOfString<S extends string, Org = S> = Org extends S
    ? S extends `${infer C}${infer Rest}` 
      ? [C, ...LengthOfString<Rest, S>]['length'] 
      : S extends ``
      ? []['length']
      : [] 
    : S extends `${infer C}${infer Rest}` 
      ? [C, ...LengthOfString<Rest, S>] 
      : []
