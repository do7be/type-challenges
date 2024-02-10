type ReverseString<T extends string> = `${T}` extends `${infer T0}${infer TR}`
? `${ReverseString<TR>}${T0}`
: ''

type IsPalindrome<T extends number | string, R extends string = ReverseString<`${T}`>> = `${T}` extends R
? true
: false
