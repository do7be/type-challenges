type MyAwaited<T> = T extends Promise<Promise<Promise<infer U>>>
  ? U 
  : T extends Promise<Promise<infer U>>
  ? U
  : T extends Promise<infer U>
  ? U
  : T extends { then: (hoge: (args: infer U) => any) => any }
  ? U
  : never
