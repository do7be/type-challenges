type Assign<T extends Record<string, unknown>, U extends any[]> = U extends [infer U0, ...infer UR]
? U0 extends Record<string, unknown>
  ? Assign<{ [K in keyof T | keyof U0]: K extends keyof U0 ? U0[K] : K extends keyof T ? T[K] : never }, UR>
  : Assign<T, UR>
: T
