type MutableKeys<T, P = { -readonly [K in keyof T]: T[K] }> = keyof {
  [K in keyof T as K extends keyof P ? Equal<Pick<P, K>, Pick<T, K>> extends true ? K : never : never]: T[K] 
}
