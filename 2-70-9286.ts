type FirstUniqueCharIndex<T extends string, I extends any[] = [], C extends string[] = []> = T extends ''
? I extends [infer _, ...infer IR]
  ? I['length'] extends C['length']
    ? -1
    : IR['length']
  : -1
: T extends `${infer T0}${infer TR}`
  ? T0 extends C[number]
    ? FirstUniqueCharIndex<TR, [...I, any], [...C, T0]>
    : TR extends `${any}${T0}` | `${any}${T0}${any}` | `${T0}${any}`
      ? FirstUniqueCharIndex<TR, [...I, any], [...C, T0]>
      : FirstUniqueCharIndex<'', [...I, any], C>
  : never
