type RemoveIndexSignature<T> = T extends unknown
  ? { [K in keyof T as string extends K & string
      ? never
      : number extends K & number
      ? never
      : symbol extends K & symbol
      ? never
      : K
    ]: T[K] }
  : never
