type Flatten<T extends any[]> = T extends [never]
? []
: T extends [infer T0, ...infer TR]
? T0 extends any[]
  ? [...Flatten<T0>, ...Flatten<TR>]
  : [T0] extends [never]
  ? []
  : [T0, ...Flatten<TR>]
: []

type Count<T, K, N extends any[] = []> = T extends [infer T0, ...infer TR]
? K extends T0
  ? Count<TR, K, [...N, any]>
  : Count<TR, K, N>
: N['length']

type CountElementNumberToObject<T extends any[], TF extends any[] = Flatten<T>> = { [K in keyof TF as K extends 'length' ? never : TF[K] extends PropertyKey ? TF[K] : never]: 0 } extends infer TF2
? { [K in keyof TF2]: Count<TF, K> }
: never
