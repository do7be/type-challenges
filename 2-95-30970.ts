type IsUnion<T, O = T> = boolean extends (T extends unknown ? O extends T ? false : true : never) ? true : false

type IsFixedStringLiteralType<S extends string> = [S] extends [never]
? false
: IsUnion<S> extends true
? false
: S extends `${infer F}${infer R}`
? F extends `${number | bigint | boolean}`
  ? false
  : string extends F
  ? false
  : Equal<F, `${string & {}}`> extends true
  ? false
  : IsFixedStringLiteralType<R>
: S extends ''
? true
: false
