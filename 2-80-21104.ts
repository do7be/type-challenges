type FindAll<T extends string, P extends string, I extends any[] = []> = P extends ''
? []
: T extends `${any}${infer K}`
? T extends `${P}${any}`
  ? [I['length'], ...FindAll<K, P, [...I, any]>]
  : [...FindAll<K, P, [...I, any]>]
: []
