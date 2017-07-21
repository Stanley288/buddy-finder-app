import { merge } from 'lodash'
import fs from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'

import { schema as usersSchema, resolvers as usersResolvers } from './users/schema'
import { getUserById, getUserByEmail, createUser, updateUser } from './users/store'

const rootSchema = [fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf-8')]

const rootResolvers = {
  Query: {
    user: async (root, args) => {
      const { id } = args
      const user = await getUserById(id)
      return user
    },
    userByEmail: async (root, args) => {
      const { email } = args
      const user = await getUserByEmail(email)
      return user
    },
  },
  Mutation: {
    createUser: async (root, args) => {
      const { input } = args
      try {
        const createdUser = await createUser(input)
        return { user: createdUser }
      } catch (e) {
        throw e
      }
    },
    updateUser: async (root, args) => {
      try {
        const { id, input } = args
        const updatedUser = await updateUser(id, input)
        return updatedUser
      } catch (e) {
        throw e
      }
    },
  },
}

const schema = [...rootSchema, ...usersSchema]
const resolvers = merge(rootResolvers, usersResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

export default executableSchema
