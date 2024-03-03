type Merge<T> = { [K in keyof T]: T[K] } 

type Fuga<T, K extends PropertyKey> = T extends T
? { [K2 in K]: T }
: never

type Hoge<T, K extends keyof T = keyof T> = [K] extends [never]
? {}
: K extends K
? Fuga<DistributeUnions<T[K]>, K> & Hoge<Omit<T, K>>
: never

type ForObject<T> = Merge<Hoge<T>>

type ForTuple<T> = T extends [infer T0, ...infer TR]
? DistributeUnions<T0> extends infer T02
  ? T02 extends T02
    ? [T02, ...ForTuple<TR>]
    : never
  : never
: []

type DistributeUnions<T> = T extends any[]
? ForTuple<T>
: T extends object
? ForObject<T>
: T
