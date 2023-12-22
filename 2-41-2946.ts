type ObjectEntries<T> = Required<T> extends infer R
  ? { [K in keyof R]: [K, [R[K]] extends [never] ? undefined : R[K]] } extends infer Q
    ? Q[keyof Q]
    : never
  : never
