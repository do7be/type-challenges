type Without<T extends any[], U extends number | any[]> = T extends [infer T0, ...infer TR]
? U extends any[]
  ? T0 extends U[number]
    ? Without<TR, U>
    : [T0, ...Without<TR, U>]
  : T0 extends U
    ? Without<TR, U>
    : [T0, ...Without<TR, U>]
: []
