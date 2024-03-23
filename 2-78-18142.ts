type All<T extends any[], K extends any> = T extends [infer T0, ...infer TR]
? Equal<T0, K> extends true
  ? TR extends []
    ? true
    : All<TR, K>
  : false
: false
