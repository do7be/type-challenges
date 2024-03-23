type Hanoi<N extends number, From = 'A', To = 'B', Intermediate = 'C', I extends any[] = []> = I['length'] extends N
  ? []
  : [...Hanoi<N, From, Intermediate, To, [...I, any]>, [From, To], ...Hanoi<N, Intermediate, To, From, [...I, any]>]
