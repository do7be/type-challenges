type Max<A extends number, B extends number, I extends any[] = []> = I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type Fizz<N extends number, I extends any[] = [any, any, any]> = I['length'] extends N
? true
: Max<I['length'], N> extends N
? Fizz<N, [...I, any, any, any]>
: false

type Buzz<N extends number> = `${N}` extends `${any}${0 | 5}` ? true : false

type FizzBuzz<N extends number, R extends any[] = [], I extends any[] = [], I2 extends any[] = [...I, any]> = I['length'] extends N
? R
: `${Fizz<I2['length']> extends true ? 'Fizz' : ''}${Buzz<I2['length']> extends true ? 'Buzz' : ''}` extends infer Str
? FizzBuzz<N, [...R, Str extends '' ? `${I2['length']}` : Str], I2>
: never
