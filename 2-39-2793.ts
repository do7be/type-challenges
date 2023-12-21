type Mutable<T extends Readonly<any>> = { -readonly [K in keyof T]: T[K] }
