import User from './model'
import { USER_NOT_FOUND, SERVER_ERROR } from '../utils/error'

const createUser = async (data) => {
  const user = new User(data)
  const savedUser = await user.save()
  if (!savedUser) throw SERVER_ERROR
  return savedUser.toJSON()
}

const updateUser = async (id, data) => {
  const user = await User.findById(id)
  if (!user) throw USER_NOT_FOUND
  Object.keys(data).forEach((entry) => {
    // friend list management
    if (entry === 'contacts') {
      data.contacts.forEach((newContact) => {
        const connectedContactIndex = user.contacts.map(contact => contact.id).findIndex(contactId => contactId === newContact.id)
        if (connectedContactIndex === -1) {
          user.contacts.push(newContact)
        } else {
          user.contacts[connectedContactIndex] = newContact
        }
      })
    } else {
      user[entry] = data[entry]
    }
  })
  const savedUser = await user.save()
  if (!savedUser) throw SERVER_ERROR
  return savedUser.toJSON()
}

const getUserById = async (id) => {
  const user = await User.findById(id)
  if (!user) throw USER_NOT_FOUND
  return user
}

const getUserByAuthId = async (authId) => {
  const user = await User.findOne({ authId })
  if (!user) throw USER_NOT_FOUND
  return user
}

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email })
  if (!user) throw USER_NOT_FOUND
  return user
}

export default { getUserById, getUserByEmail, getUserByAuthId, createUser, updateUser }
