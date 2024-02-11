type CA<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CA<N, [...I, any]>

type Sum<A extends number, B extends number> = [...CA<A>, ...CA<B>]['length']

type TwoSumForValue<N extends number, T extends number[], U extends number> = T extends [infer T0 extends number, ...infer TR extends number[]]
? Sum<N, T0> extends U
  ? true
  : TwoSumForValue<N, TR, U>
: false

type TwoSum<T extends number[], U extends number> = T extends [infer T0 extends number, ...infer TR extends number[]]
? TwoSumForValue<T0, TR, U> extends true
  ? true
  : TwoSum<TR, U>
: false
