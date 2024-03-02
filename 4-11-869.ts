// TODO
type ForObject<T> = { [K in keyof T]: T[K] extends infer U ? U extends U ? U | ForObject<Omit<T, K>> : never : never }

type ForTuple<T> = T extends [infer T0, ...infer TR]
? T0 extends T0
  ? [T0, ...ForTuple<TR>]
  : never
: []

type ForAny<T, O = T> = T extends T
? T | ForAny<Exclude<O, T>>
: []


type DistributeUnions<T> = T extends any[]
? ForTuple<T>
: T extends object
? ForObject<T>
: ForAny<T>
