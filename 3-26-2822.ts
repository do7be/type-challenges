type Split<S extends string, SEP extends string | undefined = undefined> = string extends S
? string[]
: SEP extends undefined
? [S]
: S extends ''
? SEP extends ''
  ? []
  : [S]
: S extends `${infer S0}${SEP}${infer SR}`
? [S0, ...Split<SR, SEP>]
: [S]
