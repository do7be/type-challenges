type BEM<B extends string, E extends string[], M extends string[]> = E[number] extends `${infer E2}`
? M[number] extends `${infer M2}`
  ? [E2] extends [never]
    ? [M2] extends [never]
      ? `${B}`
      : `${B}--${M2}`
    : [M2] extends [never]
      ? `${B}__${E2}`
      : `${B}__${E2}--${M2}`
  : never
: never
