type Join<T extends any[], U extends string | number> = T extends [`${infer T0}`, ...infer TR]
? TR extends []
  ? T0
  : `${T0}${U}${Join<TR, U>}`
: ''
