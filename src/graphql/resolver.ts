import type { Context } from './context'

export const resolvers = {
  Query: {
    users: async (_parent, args, context: Context) => {
      return await context.prisma.user.findMany()
    },
  },
}
