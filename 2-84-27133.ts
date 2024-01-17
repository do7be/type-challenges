type Square<N extends number | string, I extends any[] = [any], PN extends any[] = [], P extends any[] = []> = `${N}` extends `-${infer MN}`
? Square<MN, I, PN, P>
: N extends 0
? 0
: `${PN['length']}` extends `${N}`
? `${I['length']}` extends `${N}`
  ? P['length']
  : Square<N, [...I, any], [any], [...P, any]>
: Square<N, I, [...PN, any], [...P, any]>
