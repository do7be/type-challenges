type LastIndexOf<T extends any[], U, I extends any[] = [], L extends number = -1> = T extends [infer T0, ...infer TR]
? Equal<T0, U> extends true
  ? LastIndexOf<TR, U, [...I, any], I['length']>
  : LastIndexOf<TR, U, [...I, any], L>
: L
