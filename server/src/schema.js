import { merge } from 'lodash'
import fs from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'

import { schema as usersSchema, resolvers as usersResolvers } from './users/schema'
import { getUserById, getUserByEmail, createUser } from './users/store'
// KC >
import { createEvent, getEventById, getEventByGeolocation, getEventByTitle } from './events/store'
// KC <

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
    event: async (root, args) => {
      const { id } = args
      const event = await getEventById(id)
      return event
    },
    eventByTitle: async (root, args) => {
      const { title } = args
      const event = await getEventByTitle(title)
      return event
    },
    // address: (root, args) => getAddress(args.id),
    // addresses: (root, args) => getAllAddresses(args.address, args.service, args.limit),
  },
  Mutation: {
    createUser: async (root, args) => {
      const { input } = args
      const createdUser = await createUser(input)
      return createdUser
    },
    createEvent: async (root, args) => {
      const { input } = args
      const createdEvent = await createEvent(input)
      return createdEvent
    }
  },
}

const schema = [...rootSchema, ...usersSchema]
const resolvers = merge(rootResolvers, usersResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

export default executableSchema
