type Last<T extends any[]> = T extends [...infer _, infer K] ? K : never
