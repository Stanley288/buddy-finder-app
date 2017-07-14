import Event from './model'

const createEvent = async (eventData) => {
  const event = new Event(eventData)
  const savedEvent = await event.save()
  console.log('saveEvent', savedEvent.toJSON())
  return savedEvent.toJSON()
}

const getEventInformation = async(id) => ({

})

const getEventByGeolocation = geolocation => ({

})

const getEventByTitle = title => ({

})


export default { createEvent }
