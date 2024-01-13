type Combs<T extends any[], K extends string = '', O extends any[] = T> = T extends [`${infer T0}`, ...infer TR]
? K extends ''
  ? Combs<TR, T0, O>
  : `${K} ${T0}` | Combs<TR, K, O>
: O extends [`${infer O0}`, ...infer OR]
  ? Combs<OR, O0, OR>
  : never
