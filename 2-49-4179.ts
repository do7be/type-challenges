type Flip<T extends { [key: PropertyKey]: string | number | boolean }> = { [K in keyof T as K extends unknown ? `${T[K]}` : never]: K }
