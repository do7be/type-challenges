type ReplaceFirst<T extends readonly unknown[], S, R> = T extends [infer T0, ...infer TR]
? T0 extends S
  ? [R, ...TR]
  : [T0, ...ReplaceFirst<TR, S, R>]
: []
