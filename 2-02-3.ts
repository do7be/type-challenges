type MyOmit<T, K extends keyof T> = { [U in keyof T as U extends K ? never : U]: T[U] }
