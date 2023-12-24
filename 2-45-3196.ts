type Reverse<T extends any[]> = T extends []
? []
: T extends [infer A, ...infer B]
  ? [...Reverse<B>, A]
  : [T[0]]

type FlipArguments<T extends (...args: any[]) => any> = T extends (...args: infer A) => infer R
? (...args: Reverse<A>) => R
: T
