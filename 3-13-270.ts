type Get<T, K extends string> = K extends keyof T
? T[K] 
: K extends `${infer K1}.${infer KR}`
? K1 extends keyof T ? Get<T[K1], KR> : never
: never
