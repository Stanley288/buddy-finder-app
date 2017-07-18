import _ from 'lodash'

import User from './model'
import { USER_NOT_FOUND, SERVER_ERROR } from '../utils/error'

//  TODO: DEEP MERGE AND ERROR HANDLING
const createUser = async (data) => {
  const user = new User(data)
  const savedUser = await user.save()
  return savedUser.toJSON()
}

const updateUser = async (id, data) => {
  try {
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
  } catch (e) {
    throw e
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id)
    if (!user) throw USER_NOT_FOUND
    return user
  } catch (e) {
    return e
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email })
    if (!user) throw USER_NOT_FOUND
    return user
  } catch (e) {
    return e
  }
}

export default { getUserById, getUserByEmail, createUser, updateUser }
