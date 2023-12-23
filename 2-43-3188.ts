type TupleToNestedObject<T extends any[], U> = T extends []
? U
: { [K in T[0]]: T extends [infer _, ...infer B] ? TupleToNestedObject<B, U> : U }
