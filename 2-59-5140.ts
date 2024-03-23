type Trunc<T extends number | string> = `${T}` extends `${infer K}.${infer _}`
? K extends ''
  ? '0'
  : K
: `${T}`
