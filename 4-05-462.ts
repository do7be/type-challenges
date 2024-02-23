type Currying<T extends any[], K extends any, U extends any[] = []> = T extends [infer L, ...infer R]
? R extends []
  ? (...args: [...U, L]) => K
  : ((...args: [...U, L]) => Currying<R, K>) & Currying<R, K, [...U, L]>
: K

declare function DynamicParamsCurrying<A extends any[], T>(fn: (...args: A) => T): Currying<A, T>
