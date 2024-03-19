declare const INDEX: unique symbol

type CreateArray<N extends number, I extends any[] = []> = I['length'] extends N
? I
: CreateArray<N, [...I, any]>

type HashMap = {
  '0': CreateArray<0>,
  '1': CreateArray<1>,
  '2': CreateArray<2>,
  '3': CreateArray<3>,
  '4': CreateArray<4>,
  '5': CreateArray<5>,
  '6': CreateArray<6>,
  '7': CreateArray<7>,
  '8': CreateArray<8>,
  '9': CreateArray<9>,
  'a': CreateArray<10>,
  'b': CreateArray<11>,
  'c': CreateArray<12>,
  'd': CreateArray<13>,
  'e': CreateArray<14>,
  'f': CreateArray<15>,
  'g': CreateArray<16>,
  'h': CreateArray<17>,
  'i': CreateArray<18>,
  'j': CreateArray<19>,
  'k': CreateArray<20>,
  'l': CreateArray<21>,
  'm': CreateArray<22>,
  'n': CreateArray<23>,
  'o': CreateArray<24>,
  'p': CreateArray<25>,
  'q': CreateArray<26>,
  'r': CreateArray<27>,
  's': CreateArray<28>,
  't': CreateArray<29>,
  'u': CreateArray<30>,
  'v': CreateArray<31>,
  'w': CreateArray<32>,
  'x': CreateArray<33>,
  'y': CreateArray<34>,
  'z': CreateArray<35>,
}

type Hash<K extends string, R extends any[] = []> = K extends `${infer K0}${infer KR}`
? K0 extends keyof HashMap
  ? Hash<KR, [...R, ...HashMap[K0]]>
  : never
: R['length']

type Hoge<T extends readonly unknown[], K extends string> = T & { [INDEX]: Hash<K> } & { [k in Hash<K>]: T[number] }

function assertArrayIndex<T extends readonly unknown[], K extends string>(
  array: number extends T['length'] ? T : never, 
  key: K
): asserts array is number extends T['length'] ? Hoge<T, K> : never {}

type Index<Array extends { [INDEX]: number }> = Array[typeof INDEX]
