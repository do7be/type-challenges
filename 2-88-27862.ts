type CartesianProduct<T, U> = T extends unknown
? U extends unknown
  ? [T, U]
  : never
: never
