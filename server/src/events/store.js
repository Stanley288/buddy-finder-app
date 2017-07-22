import { getDistance } from '.././utils'
import Event from './model'

import { EVENT_NOT_FOUND, SERVER_ERROR } from '../utils/error'

const createEvent = async (eventData) => {
  const event = new Event(eventData)
  const savedEvent = await event.save()

  if (!savedEvent) throw SERVER_ERROR
  return savedEvent.toJSON()
}

const getEventById = async (id) => {
  const event = await Event.findById(id)
  if (!event) throw EVENT_NOT_FOUND
  return event
}

const getEventByLocation = async (userLocation, distance) => {
  // i find the filter by city doesnt really work, so let's just stick with the stupid way for now
  // TODO: I use the get distance function I made, can you test and make sure it work since i didnt test it

  const allEvents = await Event.find({})

  //  filter events within the radius
  const events = allEvents.filter(event => (getDistance(userLocation, event.location) <= distance))

  if (!events) throw SERVER_ERROR
  if (!events.length) throw EVENT_NOT_FOUND
  return events
}


// TODO: have to find more than 1 event
const getEventByTitle = async (title) => {
  const event = await Event.findOne({ title })
  if (!event) throw SERVER_ERROR
  return event
}

export default { createEvent, getEventById, getEventByTitle, getEventByLocation }
