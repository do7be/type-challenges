type VuePropType<T> = T extends StringConstructor
? string
: T extends NumberConstructor
? number
: T extends BooleanConstructor
? boolean
: T extends RegExpConstructor
? RegExp
: T extends { constructor: any }
? ThisType<T>
: T

type PropsType<T> = { [K in keyof T]: T[K] extends { type: infer Type }
? Type extends any[]
  ? VuePropType<Type[number]>
  : VuePropType<Type>
: {} extends T[K]
? any
: VuePropType<T[K]>
}

declare function VueBasicProps<
  Props,
  Data, 
  Computed,
  Methods
>(options: { props: Props, data: (this: PropsType<Props>) => Data, computed: Computed, methods: Methods } & ThisType<Data & {
  [K in keyof Computed]: Computed[K] extends () => infer R ? R : never
} & Methods & PropsType<Props>>): any
