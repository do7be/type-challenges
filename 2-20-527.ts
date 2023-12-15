type AppendToObject<T, U extends string | number | symbol, V> = { [K in keyof T | U]: K extends keyof T ? T[K] : V }
