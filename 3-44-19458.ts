type SnakeCase<T> = T extends `${infer T0}${infer TR}`
? TR extends `${infer TR0}${infer TRR}`
  ? TR0 extends Uppercase<TR0>
    ? `${T0}_${Lowercase<TR0>}${SnakeCase<TRR>}`
    : `${T0}${SnakeCase<TR>}`
  : T
: T
