type Concat<T, U> = T extends readonly [...infer P]
  ? U extends readonly [...infer K]
    ? [...P, ...K]
    : P
  : U extends readonly [...infer K]
    ? K
    : []
