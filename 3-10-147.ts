type ParsePrintFormat<T extends string, P extends string[] = []> = T extends `${string}%%${infer TR}`
? ParsePrintFormat<TR, P>
: T extends `${string}%${infer T0 extends keyof ControlsMap}${infer TR}`
? ParsePrintFormat<TR, [...P, ControlsMap[T0]]>
: P
