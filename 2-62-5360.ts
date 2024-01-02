type Includes<T extends any[], U, I extends any[] = []> = T extends [infer T0, ...infer TR]
? Equal<T0, U> extends true
  ? true
  : Includes<TR, U, [...I, any]>
: false

type Unique<T extends any[], U extends any[] = []> = T extends [infer T0, ...infer TR]
? Includes<U, T0> extends true
  ? Unique<TR, U>
  : Unique<TR, [...U, T0]>
: U
