type StringToArray<T extends string> = T extends ''
? []
: T extends `${infer T0}${infer TR}`
? [T0, ...StringToArray<TR>]
: []

type AllCombinations<S extends string, T extends string[] = StringToArray<S>, K extends string = T[number], KO extends string = K> = [K] extends [never]
? ''
: K extends K
? '' | K | `${K}${AllCombinations<S, T, Exclude<KO, K>>}`
: never
