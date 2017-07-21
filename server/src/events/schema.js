import fs from 'fs'
import { join } from 'path'
// import { createEvent, getEventById, getEventByGeolocation, getEventByTitle } from './store'

export const schema = [fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf-8')]

export const resolvers = {
  // Query: {
  //   event: async (root, args) => {
  //     const { id } = args
  //     const event = await getEventById(id)
  //     return event
  //   },
  //   eventByTitle: async (root, args) => {
  //     const { title } = args
  //     const event = await getEventByTitle(title)
  //     return event
  //   },
  // },
  // Mutation: {
  //   createEvent: async (root, args) => {
  //     const { input } = args
  //     const createdEvent = await createEvent(input)
  //     return createdEvent
  //   },
  // },
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
