type TrimRight<S extends string> = S extends ' ' | '\n' | '\t'
? ''
: S extends `${infer S0}${infer SR}`
  ? TrimRight<SR> extends ''
    ? S0 extends ' ' | '\n' | '\t'
      ? ''
      : S0
    : `${S0}${TrimRight<SR>}`
  : S
