type DeepMutable<T extends object | any[]> = {
  -readonly [K in keyof T]: T[K] extends Function
  ? T[K]
  : T[K] extends [infer TK0, ...infer TKR]
  ? TK0 extends object
    ? [DeepMutable<TK0>, ...DeepMutable<TKR>]
    : [TK0, ...DeepMutable<TKR>]
  : T[K] extends object
  ? DeepMutable<T[K]>
  : T[K]
}
