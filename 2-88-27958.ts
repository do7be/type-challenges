type CheckRepeatedTuple<T extends unknown[]> = T extends [infer T0, ...infer TR]
? T0 extends TR[number]
  ? true
  : CheckRepeatedTuple<TR>
: false
