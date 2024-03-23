type DeepOmit<T, P extends string> = P extends `${infer P1}.${infer R}`
? { [K in keyof T]: K extends P1 ? (P1 extends keyof T ? DeepOmit<T[P1], R> : never) : T[K] }
: Omit<T, P>
