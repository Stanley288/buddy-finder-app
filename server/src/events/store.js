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
    // i find the filter by city doesnt really work, so let's just stick with the stupid way for now
    // TODO: I use the get distance function I made, can you test and make sure it work since i didnt test it

    const allEvents = await Event.find({})

    //  filter events within the radius
    const events = allEvents.filter(event => (getDistance(userLocation, event.location) <= distance))

    return events
  } catch (e) {
    throw e
  }
}

const getEventByTitle = async (title) => {
  const event = await Event.findOne({ title })
  return event
}

export default { createEvent, getEventById, getEventByTitle, getEventByLocation }
