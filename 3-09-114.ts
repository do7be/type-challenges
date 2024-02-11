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
