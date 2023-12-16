type AnyOf<T extends readonly any[]> = T extends [infer K, ...infer F]
  ? K extends false | 0 | '' | undefined | null | []
    ? AnyOf<F>
    : keyof K extends never
      ? AnyOf<F>
      : true
  : false
