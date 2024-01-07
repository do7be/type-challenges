type ToPrimitive<T> = {
  [K in keyof T]: T[K] extends string
  ? string
  : T[K] extends boolean
  ? boolean
  : T[K] extends number
  ? number
  : T[K] extends Function
  ? Function
  : ToPrimitive<T[K]>
}
