import { PrismaClient } from '@prisma/client'
import { simpleExtension } from 'simple-ext'

function main() {
  const prisma = new PrismaClient().$extends(simpleExtension('hello'))

  const data = prisma.user.simpleCall({
    where: {
      email: 'a',
      // @ts-expect-error
      nonExistentField: 2,
    },
  })
}

void main()
