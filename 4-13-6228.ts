type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Space = '\n' | ' '
type SpecificToken = '{' | '}' | '[' | ']' | ':' | ',' 
type Primitive = true | false | null
type Keyword<S, R extends string = ''> = S extends `${infer S0}${infer SR}`
? S0 extends '"'
  ? R extends ''
    ? Keyword<SR, `${R}${S0}`>
    : `${R}${S0}`
  : Keyword<SR, `${R}${S0}`>
: never

type Token = SpecificToken | Primitive | `"${string}"`
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = T extends `${infer T0}${infer TR}`
? T0 extends Space
  ? Tokenize<TR, S>
  : T0 extends SpecificToken
  ? Tokenize<TR, [...S, T0]>
  : T extends `${Primitive}${string}`
  ? T extends `true${infer TR2}`
    ? Tokenize<TR2, [...S, true]>
    : T extends `false${infer TR2}`
    ? Tokenize<TR2, [...S, false]>
    : T extends `null${infer TR2}`
    ? Tokenize<TR2, [...S, null]>
    : never
  : T extends `${infer Str extends `"${any}"`}${string}`
  ? T extends `${Str}${infer TR2}`
    ? Tokenize<TR2, [...S, Keyword<T>]>
    : never
  : never
: S

type ParseLiteral<T extends Token[]> = T[0] extends Primitive
? T[0] extends true
  ? [true]
  : T[0] extends false
  ? [false]
  : T[0] extends null
  ? [null]
  : never
: ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>
