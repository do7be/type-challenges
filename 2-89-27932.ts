type MergeAll<XS, U = {}> = XS extends [infer XS0, ...infer XSR]
? MergeAll<XSR, { [K in keyof U | keyof XS0] : (K extends keyof U ? U[K] : never) | (K extends keyof XS0 ? XS0[K] : never) }>
: U
