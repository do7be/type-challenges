type ToNumber<S extends string, I extends any[] = []> = S extends `${number}`
? `${I['length']}` extends S
  ? I['length']
  : ToNumber<S, [...I, any]>
: never
