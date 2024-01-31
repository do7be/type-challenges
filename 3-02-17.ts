type CurryingNext<T extends any[], K extends any> = T extends [any, ...infer R]
? T extends [...infer L, ...R]
  ? (...args: L) => CurryingNext<R, K>
  : never
: K

declare function Currying<T>(fn: T): T extends (...args: infer P) => infer K
? P extends []
  ? () => K
  : CurryingNext<P, K>
: never
