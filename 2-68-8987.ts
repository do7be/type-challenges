type Subsequence<T extends any[], K extends number = T[number], O extends number = K> = T extends []
? []
: K extends K
? T extends [infer T0, ...infer TR]
  ? O extends K
    ? [T0] | []
    : K extends T0
    ? [...Subsequence<TR>]
    : [T0, ...Subsequence<TR>]
  : []
: []
