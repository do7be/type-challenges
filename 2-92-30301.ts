type IsOdd<T extends number> = `${T}` extends `${number}${1 | 3 | 5 | 7 | 9}`
? true
: false
