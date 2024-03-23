type GetMiddleElement<T extends any[], L extends any[] = []> = T extends [infer T0, ...infer TR]
  ? TR['length'] extends L['length']
    ? [T0]
    : T['length'] extends L['length']
      ? L extends [...infer _, infer K]
        ? [K, T0]
        : never
      : GetMiddleElement<TR, [...L, T0]>
  : []
