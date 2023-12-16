type KebabCase<S extends string, Org = S> = S extends `${infer A}${infer Rest}`
  ? Org extends S
    ? `${Lowercase<A>}${KebabCase<Rest, Org>}`
    : Lowercase<A> extends Uppercase<A>
      ? `${A}${KebabCase<Rest, Org>}`
      : `${A extends Uppercase<A> ? '-' : ''}${Lowercase<A>}${KebabCase<Rest, Org>}`
  : S
