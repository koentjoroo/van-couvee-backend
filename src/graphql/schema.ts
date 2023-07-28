export const typeDefs = `#graphql
  type User {
    id: String
    name: String
    email: String
    role: EnumRole
  }

  enum EnumRole {
    USER
    ADMIN
  }

  type Query {
    users: [User]
  }
`
