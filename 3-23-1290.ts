type Getters<G> = { [K in keyof G]: G[K] extends () => infer R ? R : never }

declare function defineStore<S, G, A>(store: {
  id: string; 
  state: (this: never) => S; 
  getters: G & ThisType<Readonly<S> & Getters<G>>;
  actions: A & ThisType<S & A>
}): S & Getters<G> & A
