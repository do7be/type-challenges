declare function SimpleVue<
  Data, 
  Computed,
  Methods
>(options: { data: (this: never) => Data, computed: Computed, methods: Methods } & ThisType<Data & {
  [K in keyof Computed]: Computed[K] extends () => infer R ? R : never
} & Methods>): any
