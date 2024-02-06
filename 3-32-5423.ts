type Intersection<T extends any[]> = T extends [infer T0, ...infer TR extends any[]]
? Extract<T0 extends number[] ? T0[number] : T0, Intersection<TR>>
: any
