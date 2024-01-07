type Integer<T extends number> = Equal<T, number> extends true
? never
: `${T}` extends `${number}.${number}`
? never
: T
