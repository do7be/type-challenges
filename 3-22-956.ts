type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends ((k: infer I) => void) ? I : never;

type DeepPick2<T, K extends string> = K extends K
? K extends keyof T
  ? Pick<T, K>
  : K extends `${infer K1}.${infer KR}`
  ? K1 extends keyof T
    ? {[KK in K1]: DeepPick2<T[K1], KR>}
    : never
  : never
: never

type DeepPick<T, K extends string> = UnionToIntersection<DeepPick2<T, K>>
