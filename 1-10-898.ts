type Includes<T extends readonly any[], U> = T extends [infer P, ...infer Q]
  ? Equal<P, U> extends true
      ? true
      : Includes<Q, U>
  : false
