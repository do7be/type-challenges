type Permutation<T, R = T> = [T] extends [never] ? [] : T extends unknown ? [T, ...Permutation<Exclude<R, T>>] : never
