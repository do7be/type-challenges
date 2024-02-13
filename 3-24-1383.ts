type CamelCase<S extends string> = S extends ''
? ''
: S extends `${infer S0}${infer SR}`
? S0 extends '_'
  ? SR extends `${infer SR0}${infer SRR}`
    ? Lowercase<SR0> extends Uppercase<SR0>
      ? `${S0}${CamelCase<SR>}`
      : `${Uppercase<SR0>}${CamelCase<SRR>}`
    : S0
  : `${Lowercase<S0>}${CamelCase<SR>}`
: never

type Camelize<T> = T extends any[]
? T extends [infer T0, ...infer TR]
  ? [Camelize<T0>, ...Camelize<TR>]
  : []
: { [K in keyof T as K extends string ? CamelCase<K> : never]: T[K] extends object ? Camelize<T[K]> : T[K]}
