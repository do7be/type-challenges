type IsAlphabet<S extends string> = Lowercase<S> extends 'a'|'b'|'c'|'d'|'e'|'f'|'g'|'h'|'i'|'j'|'k'|'l'|'m'|'n'|'o'|'p'|'q'|'r'|'s'|'t'|'u'|'v'|'w'|'x'|'y'|'z'
? true
: false

type CapitalizeWords<S extends string, R extends string = ''> = S extends ''
? R
: S extends `${infer S0}${infer SR}`
? R extends ''
  ? CapitalizeWords<SR, Uppercase<S0>>
  : IsAlphabet<S0> extends false
    ? SR extends `${infer SR0}${infer SRR}`
      ? IsAlphabet<SR0> extends false
        ? CapitalizeWords<SR, `${R}${S0}`>
        : CapitalizeWords<SRR, `${R}${S0}${Uppercase<SR0>}`>
      : never
    : CapitalizeWords<SR, `${R}${S0}`>
: never
