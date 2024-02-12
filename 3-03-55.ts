type UnionToIntersection<U> = (U extends U ? (arg: U) => any : never) extends (arg: infer R) => any ? R : never
