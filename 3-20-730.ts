type UnionToIntersection<U> = (U extends U ? (arg: U) => any : never) extends (arg: infer R) => any ? R : never

type Hoge<T> = [T] extends [never]
? []
: UnionToIntersection<(T extends T ? () => T : never)> extends () => infer R
? [R, ...Hoge<Exclude<T, R>>]
: never

type UnionToTuple<T> = [T] extends [never] ? never : Hoge<T>
