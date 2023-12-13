type Chainable<T extends { [key: string]: any } = {}> = {
  option<U extends string, P>(key: U, value: P): Chainable<{ [K in keyof T | U]: K extends U ? P : T[K] }>,
  get(): T
}
