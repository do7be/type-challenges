type StringToType<T extends string> = T extends 'string'
? string
: T extends 'number'
? number
: T extends 'boolean'
? boolean
: never

type RequiredByKeys<T, K extends keyof T = keyof T> = { [U in keyof Omit<T, K>]: T[U] } & Required<{ [U in K]: T[U] }> extends infer A
  ? { [P in keyof A]: A[P] }
  : never

type JSONSchema2TS<T> = T extends { enum: infer Enum extends any[] }
? Enum[number]
: T extends { type: 'object' }
? T extends { properties: infer Properties }
  ? T extends { required: infer Required extends (keyof Properties)[] }
    ? RequiredByKeys<{ [K in keyof Properties]?: JSONSchema2TS<Properties[K]> }, Required[number]>
    : { [K in keyof Properties]?: JSONSchema2TS<Properties[K]> }
  : Record<string, unknown>
: T extends { type: 'array' }
? T extends { items: infer Items }
  ? JSONSchema2TS<Items>[]
  : unknown[]
: T extends { type: `${infer Type}` }
? StringToType<Type>
: unknown

