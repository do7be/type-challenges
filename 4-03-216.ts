type CreateArray<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CreateArray<N, [...I, any]>

type IsNegative<T extends number> = `${T}` extends `-${any}` ? true : false

type Abs<T extends number, I extends any[] = []> = `-${I['length']}` extends `${T}`
? I['length']
: Abs<T, [...I, any]>

type IsSlice<Len extends number, N extends number, I extends any[]> = IsNegative<N> extends true
? [...I, ...CreateArray<Abs<N>>]['length'] extends Len ? true : false
: I['length'] extends N ? true : false

type Slice<Arr extends any[], Start extends number = 0, End extends number = Arr['length'], Len extends number = Arr['length'], I extends any[] = [], R extends any[] = [], Flag = false> = Arr extends [infer Arr0, ...infer ArrR]
? IsSlice<Len, End, I> extends true
  ? R
  : Flag extends true
  ? Slice<ArrR, Start, End, Len, [...I, any], [...R, Arr0], Flag>
  : IsSlice<Len, Start, I> extends true
  ? Slice<ArrR, Start, End, Len, [...I, any], [...R, Arr0], true>
  : Slice<ArrR, Start, End, Len, [...I, any], R>
: R
