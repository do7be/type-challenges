type First<T extends any[]> = T[number] extends never ? never : T[0]
