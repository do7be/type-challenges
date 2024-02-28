// https://github.com/type-challenges/type-challenges/blob/main/questions/00697-extreme-tag/README.md

type UnionToIntersection<U> = (U extends U ? (arg: U) => any : never) extends (arg: infer R) => any ? R : never

type UnionToTupleNext<T> = [T] extends [never]
? []
: UnionToIntersection<(T extends T ? () => T : never)> extends () => infer R
? [R, ...UnionToTupleNext<Exclude<T, R>>]
: never

type UnionToTuple<T> = [T] extends [never] ? never : UnionToTupleNext<T>

declare const UniqueSymbol: unique symbol;

type GetTagsByTuple<B> = B extends [...infer BL, infer BR]
? [...(BR extends (() => infer A extends any[]) ? A : []), ...GetTagsByTuple<BL>]
: []

type Unique<T extends any[], R extends any[] = []> = T extends [infer T0, ...infer TR]
? T0 extends R[number]
  ? Unique<TR, R>
  : Unique<TR, [...R, T0]>
: R

type ValidTags<B, O = B> = B extends B
? UnTag<O> extends UnTag<B>
  ? B
  : never
: never

type ValidTags2<B, O = B> = Unique<GetTagsByTuple<UnionToTuple<B>>> extends infer U extends any[]
? U['length'] extends 1
  ? Equal<Tag<UnTag<B>, U[0]>, B>
  : [ValidTags<O>] extends [never] ? false : true
: never

type GetTags<B> = Equal<B, any> extends true 
? []
: ValidTags2<B> extends false
? []
: Unique<GetTagsByTuple<UnionToTuple<B>>>

type Tag<B, T extends string, O = B> = Equal<B, null> extends true
? B
: Equal<B, undefined> extends true
? B
: Equal<B, never> extends true
? { [UniqueSymbol]: any } | (() => [T])
: Equal<B, unknown> extends true
? { [UniqueSymbol]: any } | (() => [T])
: Equal<B, any> extends true
? { [UniqueSymbol]: any } | (() => [T])
: B extends { [UniqueSymbol]: any }
? B
: B extends (() => any[])
? (() => [...GetTags<O>, T])
: Exclude<O, null | undefined> | UnTag<O> & (() => [...GetTags<O>, T])

type UnTag<B> = Exclude<B, () => any> extends infer R
? R extends { [UniqueSymbol]: any }
  ? any
  : R
: B

type HasTag<B, T extends string> = T extends GetTags<B>[number] ? true : false
type HasTags<B, T extends readonly string[]> = GetTags<B> extends [...any[], ...T] | [...T, ...any[]] ? true : false
type HasExactTags<B, T extends readonly string[]> = GetTags<B> extends T ? true : false
