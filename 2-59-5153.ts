type IsAny<T> = 0 extends (1 & T) ? true : false; 

type IndexOf<T extends any[], U, I extends any[] = []> = T extends [infer T0, ...infer TR]
? IsAny<U> extends true
  ? IsAny<T0> extends true
    ? I['length']
    : IndexOf<TR, U, [...I, any]>
  : T0 | U extends T0 & U
    ? IsAny<T0> extends false
      ? I['length']
      : IndexOf<TR, U, [...I, any]>
    : IndexOf<TR, U, [...I, any]>
: -1
