type IsTuple<T> = [T] extends [never]
? false
: T extends []
? true
: Readonly<T> extends readonly [any]
? true
: false
