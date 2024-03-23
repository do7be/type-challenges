type FindEles<T extends any[], O extends any[] = [], U extends any[] = []> = T extends [infer T0, ...infer TR]
? T0 extends TR[number] | O[number]
  ? FindEles<TR, [...O, T0], U>
  : FindEles<TR, [...O, T0], [...U, T0]>
: U
