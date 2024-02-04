type Join<T extends string, K extends string[]> = K extends [infer K0 extends string, ...infer KR extends string[]]
? KR extends []
  ? K0
  : `${K0}${T}${Join<T, KR>}`
: ''

declare function join<T extends string>(delimiter: T): <K extends string[]>(...parts: K) => Join<T, K>
