import User from './model'
import log from '../utils/log'
import { USER_NOT_FOUND, SERVER_ERROR } from '../utils/error'

//  TODO: DEEP MERGE AND ERROR HANDLING
const createUser = async (data) => {
  console.log('im here')
  const user = new User(data)
  const savedUser = await user.save()
  console.log(savedUser)
  return savedUser.toJSON()
}

const updateUser = async (id, data) => {
  try {
    const user = await User.findById(id)
    if (!user) return { error: { code: USER_NOT_FOUND } }
    Object.keys(data).forEach((entry) => {
      // friend list management
      if (entry === 'connections') {
        user.connections = [...user.connections, ...data.connections]
      } else {
        user[entry] = data[entry]
      }
    })
    const savedUser = await user.save()
    return savedUser.toJSON()
  } catch (e) {
    return { error: { code: SERVER_ERROR } }
  }
}

const getUserById = async (id) => {
  try {
    const user = await User.findById(id)
    if (!user) return { error: { code: USER_NOT_FOUND } }
    return user
  } catch (e) {
    return { error: { code: SERVER_ERROR } }
  }
}

const getUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email })
    if (!user) return { error: { code: USER_NOT_FOUND } }
    return user
  } catch (e) {
    return { error: { code: SERVER_ERROR } }
  }
}

export default { getUserById, getUserByEmail, createUser, updateUser }
