type Unique<T extends any[], R extends any[] = []> = T extends [infer T0, ...infer TR]
? T0 extends R[number]
  ? Unique<TR, R>
  : Unique<TR, [...R, T0]>
: R

type Parse<S extends string> = S extends `${infer K}=${infer V}`
? [K, V]
: [S, true]

type ParseToArray<S extends string> = S extends ''
? []
: S extends `${infer S0}&${infer SR}`
? [Parse<S0>, ...ParseToArray<SR>]
: [Parse<S>]

type ArrayToObject<T extends any[][], R extends { [key: string]: any[] } = {}> = T extends [infer T0, ...infer TR extends any[][]]
? T0 extends [infer K extends string, infer V]
  ? ArrayToObject<TR, { [U in (keyof R) | K]: Unique<[...(U extends keyof R ? R[U] : []), ...(U extends K ? [V] : [])]> }>
  : never
: R

type ParseQueryString<S extends string> = ParseToArray<S> extends infer T extends any[][]
? ArrayToObject<T> extends infer A extends { [key: string]: any[] }
  ? { [K in keyof A]: A[K]['length'] extends 1 ? A[K][0] : A[K] }
  : never
: never
