import fs from 'fs'
import { join } from 'path'
// import { createEvent, getEventById, getEventByGeolocation, getEventByTitle } from './store'

export const schema = [fs.readFileSync(join(__dirname, 'schema.graphql'), 'utf-8')]

export const resolvers = {}
