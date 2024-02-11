type Format<T extends string> = T extends `${infer T0}${infer TR}`
? T0 extends '%'
  ? TR extends `${infer TR0}${infer TRR}`
    ? TR0 extends 's'
      ? (arg: string) => Format<TRR>
      : TR0 extends 'd'
      ? (arg: number) => Format<TRR>
      : Format<TRR>
    : string
  : Format<TR>
: string
