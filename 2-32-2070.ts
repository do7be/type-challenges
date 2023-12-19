type DropChar<S, C> = S extends `${infer A}${infer Rest}`
  ? A extends C 
    ? `${DropChar<Rest, C>}` 
    : `${A}${DropChar<Rest, C>}` 
  : S extends C 
    ? ''
    : S
