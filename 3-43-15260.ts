type Path<T, K extends keyof T = Extract<keyof T, string>> = T extends object
? K extends K
  ? [K] | [K, ...Path<T[K]>]
  : never
: []
