type ExtractToObject<T, U extends keyof T> = ({ [K in keyof T as K extends U ? never : K]: T[K] } & T[U]) extends infer P
? { [K in keyof P]: P[K] }
: never
