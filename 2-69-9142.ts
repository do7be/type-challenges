type CheckRepeatedChars<T extends string> = T extends `${infer F}${infer Rest}`
? Rest extends `${F}${any}` | `${any}${F}` | `${any}${F}${any}` 
  ? true
  : CheckRepeatedChars<Rest>
: false
