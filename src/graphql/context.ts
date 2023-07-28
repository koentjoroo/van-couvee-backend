import { PrismaClient } from '@prisma/client'

export type Context = {
  token: string
  prisma: PrismaClient
}

export async function context(req): Promise<Context> {
  return {
    token: req?.headers?.authorization || '',
    prisma: new PrismaClient(),
  }
}
