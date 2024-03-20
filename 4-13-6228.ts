type Pure<T> = {
  [P in keyof T]: T[P] extends object ? Pure<T[P]> : T[P]
}

type SetProperty<T, K extends PropertyKey, V> = {
  [P in (keyof T) | K]: P extends K ? V : P extends keyof T ? T[P] : never
}

type SpecificToken = '{' | '}' | '[' | ']' | ':' | ',' | true | false | null
type Token = SpecificToken | `${string}`
type ParseResult<T, K extends Token[]> = [T, K]
type Tokenize<T extends string, S extends Token[] = []> = T extends `${infer T0}${infer TR}`
? T0 extends SpecificToken
  ? Tokenize<TR, [...S, T0]>
  : Tokenize<TR, [...S, T0]> // TODO
: S

type ParseLiteral<T extends Token[]> = ParseResult<any, T>

type Parse<T extends string> = Pure<ParseLiteral<Tokenize<T>>[0]>

