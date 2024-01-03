type ConstructTuple<L extends number, I extends unknown[] = []> = I['length'] extends L
? I
: ConstructTuple<L, [...I, unknown]>
