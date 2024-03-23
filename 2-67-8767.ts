type Combination<T extends string[], S extends string = T[number], SO extends string = S> = S extends string
? S | `${S} ${Combination<T, Exclude<SO, S>>}`
: ''
