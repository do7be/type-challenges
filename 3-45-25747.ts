type IsUnion<T, O = T> = T extends T ? [Exclude<O, T>] extends [never] ? false : true : never

type IsNegativeNumber<T extends number> = number extends T
? never
: IsUnion<T> extends true
? never
: `${T}` extends `-${number}` ? true : false
