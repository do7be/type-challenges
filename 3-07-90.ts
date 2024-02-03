type OptionalKeys<T, P = { [K in keyof T]-?: T[K] }> = keyof {
  [K in keyof T as K extends keyof P ? T[K] extends P[K] ? never : K : never]: T[K] 
}
