type IsUnion<T, R = T> = [T] extends [never]
  ? false
  : T extends unknown
  ? Exclude<R, T> extends never ? false : true
  : false
