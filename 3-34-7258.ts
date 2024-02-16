type ObjectKeyPaths<T extends object, K extends keyof T = keyof T> = K extends string
? T[K] extends any[]
  ? K | `${K}${`.${number}` | `[${number}]` | `.[${number}]`}${T[K][number] extends object ? `.${ObjectKeyPaths<T[K][number]>}` : ''}`
  : T[K] extends object
  ? K | `${K}.${ObjectKeyPaths<T[K]>}`
  : K
: never
