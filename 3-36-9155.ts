type MonthMap = {
  '01': 31,
  '02': 28,
  '03': 31,
  '04': 30,
  '05': 31,
  '06': 30,
  '07': 31,
  '08': 31,
  '09': 30,
  '10': 31,
  '11': 30,
  '12': 31,
}

type ToNumber<S extends string, I extends any[] = []> = S extends `${number}`
? `${I['length']}` extends S
  ? I['length']
  : ToNumber<S, [...I, any]>
: never

type TrimLeftZero<S extends string> = S extends `0${infer SR}`
? TrimLeftZero<SR>
: S

type Max<A extends number, B extends number, I extends any[] = []> = I['length'] extends A
? B
: I['length'] extends B
? A
: Max<A, B, [...I, any]>

type ValidDate<T extends string> = T extends `${infer Mon1}${infer Mon2}${infer Day}`
? `${Mon1}${Mon2}` extends keyof MonthMap
  ? ToNumber<TrimLeftZero<Day>> extends infer DayNumber extends number
    ? [DayNumber] extends [never]
      ? false
      : Max<DayNumber, MonthMap[`${Mon1}${Mon2}`]> extends MonthMap[`${Mon1}${Mon2}`]
      ? true
      : false
    : false
  : false
: false
