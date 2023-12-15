type Absolute<T extends number | string | bigint> = T extends `-${infer S}` 
  ? S 
  : T extends `${infer S}` 
  ? S 
  : Absolute<`${T}`>
