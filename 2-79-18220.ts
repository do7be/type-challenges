type Filter<T extends any[], P> = T extends [infer T0, ...infer TR]
? T0 extends P
  ? [T0, ...Filter<TR, P>]
  : [...Filter<TR, P>]
: []
