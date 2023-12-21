type PartialByKeys<T, K extends keyof T = keyof T> =  keyof T extends K
? Partial<T>
: { [U in keyof Omit<T, K>]: T[U] } & { [U in K]?: T[U] } extends infer A
  ? { [P in keyof A]: A[P] }
  : never
