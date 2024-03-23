type MapTypes<T, R extends { mapFrom: any, mapTo: any }, U extends { mapFrom: any, mapTo: any } = R> = { [K in keyof T]: R extends unknown
  ? T[K] extends R['mapFrom']
    ? R['mapTo']
    : T[K] extends U['mapFrom']
      ? never
      : T[K]
  : never
}
