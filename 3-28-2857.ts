type IsRequiredKey<T, K extends keyof T> = { [K2 in K]: T[K2] } extends infer T2
? T2 extends { [K2 in K]-?: T[K2] }
  ? true
  : false
: never
