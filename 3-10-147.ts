type ParsePrintFormat<T extends string, P extends string[] = []> = T extends `${string}%${infer T0}${infer TR}`
? T0 extends keyof ControlsMap
  ? ParsePrintFormat<TR, [...P, ControlsMap[T0]]>
  : ParsePrintFormat<TR, P>
: P
