type NumberRange<L extends number, H extends number, I extends number[] = [], S extends any[] = []> = I extends [...infer _, infer IL]
? IL extends H
  ? I[number]
  : NumberRange<L, H, [...I, S['length']], [...S, any]>
: S['length'] extends L
  ? NumberRange<L, H, [...I, S['length']], [...S, any]>
  : NumberRange<L, H, I, [...S, any]>
