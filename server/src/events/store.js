import { getDistance } from './utils'
import Event from './model'

const createEvent = async (eventData) => {
  const event = new Event(eventData)
  const savedEvent = await event.save()
  return savedEvent.toJSON()
}

const getEventById = async (id) => {
  const event = await Event.findById(id)
  return event
}

const getEventByLocation = async (userLocation, distance) => {
  try {

    // TODO: use the get distance function I made

    return events
  } catch (e) {
    throw e
  }
}

const getEventByTitle = async (title) => {
  const event = await Event.findOne({ title })
  return event
}

export default { createEvent, getEventById, getEventByTitle }
