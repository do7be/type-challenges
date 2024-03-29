type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type Unescape<S extends string> = S extends `"${infer R}"` ? R : S

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

type ParseResult<T extends Token[], R = {}> = T extends [infer T0, ...infer TR extends Token[]]
? T0 extends '{'
  ? ParseObject<TR, R>
  : T0 extends '['
  ? ParseArray<TR>
  : never
: never

type ParseObject<T extends Token[], R = {}> = T extends [infer Key extends string, ':', infer Value, ...infer TR extends Token[]]
? Value extends '['
  ? ParseArray<TR> extends [infer RR, infer TokenR extends Token[]]
    ? ParseObject<TokenR, SetProperty<R, Unescape<Key>, RR>>
    : never
  : ParseObject<TR, SetProperty<R, Unescape<Key>, Value extends string ? Unescape<Value> : Value>>
: T extends [infer T0, ...infer TR extends Token[]]
? T0 extends ','
  ? ParseObject<TR, R>
  : T0 extends '}'
  ? [R, TR]
  : never
: never

type ParseArray<T extends Token[], R extends any[] = []> = T extends [infer T0, ...infer TR extends Token[]]
? T0 extends '{'
  ? ParseObject<TR> extends [infer RR, infer TokenR extends Token[]]
    ? ParseArray<TokenR, [...R, RR]>
    : never
  : T0 extends `"${any}"`
  ? ParseArray<TR, [...R, Unescape<T0>]>
  : T0 extends Primitive
  ? ParseArray<TR, [...R, T0]>
  : T extends [',', ...infer TRR extends Token[]]
  ? ParseArray<TRR, R>
  : T0 extends ']'
  ? [R, TR]
  : never
: R


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
: ParseResult<T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>
