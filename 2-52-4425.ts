type GreaterThan<T extends number, U extends number, I extends any[] = []> = T extends I['length']
? false
: U extends I['length']
  ? true
  : GreaterThan<T, U, [...I, any]>
