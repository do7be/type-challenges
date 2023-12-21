type RequiredByKeys<T, K extends keyof T = keyof T> = { [U in keyof Omit<T, K>]: T[U] } & Required<{ [U in K]: T[U] }> extends infer A
  ? { [P in keyof A]: A[P] }
  : never
