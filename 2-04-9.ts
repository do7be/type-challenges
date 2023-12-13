type DeepReadonly<T> = {
  readonly[K in keyof T]: T[K] extends Function
  ? T[K]
  : T[K] extends { [key: string | number | symbol]: any }
  ? DeepReadonly<T[K]>
  : T[K]
}
