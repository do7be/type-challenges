type StringToUnion<T extends string> = T extends `${infer T0}${infer TR}`
? T0 | StringToUnion<TR>
: never

type DropString<S extends string, R extends string, U extends string = StringToUnion<R>> = S extends `${infer S0}${infer SR}`
? S0 extends U
  ? `${DropString<SR, R>}`
  : `${S0}${DropString<SR, R>}`
: S
