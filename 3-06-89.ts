type RequiredKeys<T, P = { [K in keyof T]-?: T[K] }> = keyof {
  [K in keyof T as K extends keyof P ? [P[K]] extends [never] ? never : T[K] extends P[K] ? K : never : never]: T[K] 
}
