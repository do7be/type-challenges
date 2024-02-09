type LengthOfString<S extends string, I extends any[] = []> = S extends ''
? I['length']
: S extends `${any}${infer SR}`
? LengthOfString<SR, [...I, any]>
: never
