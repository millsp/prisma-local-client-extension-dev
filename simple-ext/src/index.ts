import { Prisma } from '@prisma/client/scripts/default-index'

export const simpleExtension = <P>(someParam: P) => Prisma.defineExtension({
  model: {
    $allModels: {
      simpleCall<T, A>(this: T, _args: Prisma.Exact<A, Prisma.Args<T, 'findFirst'>>) {
        return {} as P // showing that passing the type all the way works
      },
    },
  },
})
