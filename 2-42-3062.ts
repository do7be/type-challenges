type Shift<T extends any[]> = T extends [infer _, ...infer K] ? K : []
