type OptionalUndefined<T, Props extends keyof T = keyof T> = { [K in Props as undefined extends T[K] ? K : never]?: T[K] } extends infer U
? { [K in Exclude<keyof T, keyof U>]: T[K] } & U extends infer R
  ? { [K in keyof R]: R[K] }
  : never
: never
