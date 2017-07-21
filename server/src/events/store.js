import Event from './model'

const createEvent = async (eventData) => {
  const event = new Event(eventData)
  const savedEvent = await event.save()
  console.log('saveEvent', savedEvent.toJSON())
  return savedEvent.toJSON()
}

const getEventById = async (id) => {
  const event = await Event.findById(id)
  return event
}

// const getEventByGeolocation = async (geolocation) => {
//   // how to add in logic inside ?
// }

const getEventByTitle = async (title) => {
  const event = await Event.findOne({ title })
  return event
}

export default { createEvent, getEventById, getEventByTitle }
