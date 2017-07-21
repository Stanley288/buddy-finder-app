import { merge } from 'lodash'
import fs from 'fs'
import { join } from 'path'
import { makeExecutableSchema } from 'graphql-tools'

import { schema as usersSchema, resolvers as usersResolvers } from './users/schema'
import { getUserById, getUserByEmail, createUser, updateUser } from './users/store'

import { getEventById, getEventByTitle, getEventByLocation, createEvent } from './events/store'
import { schema as eventsSchema, resolvers as eventsResolvers } from './events/schema'

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
    eventByLocation: async (root, args) => {
      const { location, distance } = args
      const event = await getEventByLocation(location, distance)
      return event
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
    createEvent: async (root, args) => {
      const { input } = args
      try {
        const createdEvent = await createEvent(input)
        return { event: createdEvent }
      } catch (e) {
        throw e
      }
    },
  },
  // updateEvent: async (root, args) => {
  //   try {
  //     const { id, input } = args
  //     const updatedEvent = await updateEvent(id, input)
  //     return updatedEvent
  //   } catch (e) {
  //     throw e
  //   }
  // },
}

const schema = [...rootSchema, ...usersSchema, ...eventsSchema]
const resolvers = merge(rootResolvers, usersResolvers, eventsResolvers)

const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers,
})

export default executableSchema
