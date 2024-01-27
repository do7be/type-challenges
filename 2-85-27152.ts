type Triangular<N extends number, S extends any[] = [], I extends any[] = [any], I2 extends any[] = []> = N extends 0
? 0
: I2['length'] extends I['length']
? I['length'] extends N
  ? S['length']
  : Triangular<N, [...S, any], [...I, any], [any]>
: Triangular<N, [...S, any], I, [...I2, any]>
