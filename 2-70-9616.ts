type ParseUrlParams<T extends string> = T extends `${string}:${infer P}`
? P extends `${infer P}/${infer R}`
  ? P | ParseUrlParams<R>
  : P
: never
