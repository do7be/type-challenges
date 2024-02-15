type ForArray<T> = T extends [infer T0, ...infer TR] ? [CapitalizeNestObjectKeys<T0>, ...ForArray<TR>] : []

type CapitalizeNestObjectKeys<T> = { [K in keyof T as K extends string ? Capitalize<K> : never]: T[K] extends any[] ? ForArray<T[K]> : T[K] extends object ? CapitalizeNestObjectKeys<T[K]> : T[K] }
