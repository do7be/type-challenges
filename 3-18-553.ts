declare const UniqueSymbol: unique symbol;

type DeepObjectToUniq<O extends object, Org = O, S extends PropertyKey = ''> = { [K in keyof O]: O[K] extends { [key: string]: any } ? DeepObjectToUniq<O[K], Org, K> : O[K]  } & { [UniqueSymbol]?: Org & S }
