type StringToUnion<T extends string> = T extends `${infer A}${infer B}` ? A | StringToUnion<B> : never
