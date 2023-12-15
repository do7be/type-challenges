type Flatten<T extends any[]> = T extends [infer A, ...infer R]
  ? A extends any[]
    ? [...Flatten<A>, ...Flatten<R>] 
    : [A, ...Flatten<R>] 
  : []
