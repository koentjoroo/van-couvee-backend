import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import 'pretty-console-colors'
import { resolvers } from './graphql/resolver'
import { typeDefs } from './graphql/schema'
import { Context, context } from './graphql/context'

const app = express()
const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
})

await server.start()

app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  bodyParser.json(),
  expressMiddleware(server, {
    context,
  }),
)
await new Promise<void>((resolve) => app.listen({ port: 4000 }, resolve))

console.info(`🚀 Server listening to http://localhost:4000/graphql`)
