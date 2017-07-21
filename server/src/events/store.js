import dist from 'google-distance'
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
    const eventLocation = 'asdf' // from database
    const promise = new Promise((resolve, reject) => {
      const event = dist.get(
        { origins: [userLocation, eventLocation] },
        (err, data) => {
          if (err) {
            reject(err)
          }

          resolve(data.distance <= distance)
        },
      )
    })
    return event
  } catch (e) {
    throw e
  }
}

const getEventByTitle = async (title) => {
  const event = await Event.findOne({ title })
  return event
}

export default { createEvent, getEventById, getEventByTitle }
