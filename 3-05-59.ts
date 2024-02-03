type GetOptional<T, P = { [K in keyof T]-?: T[K] }> = {
  [K in keyof T as K extends keyof P ? T[K] extends P[K] ? never : K : never]: T[K] 
}
