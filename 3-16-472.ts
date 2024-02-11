type Enum<T extends readonly string[], N extends boolean = false, R extends any = {}, I extends any[] = []> = T extends readonly [infer T0 extends string, ...infer TR extends string[]]
? Enum<TR, N, { readonly [K in Capitalize<T0> | keyof R]: K extends keyof R ? R[K] : N extends true ? I['length'] : T0 }, [...I, any]>
: R
