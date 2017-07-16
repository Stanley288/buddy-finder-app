import User from './model'
import { USER_NOT_FOUND, SERVER_ERROR } from '../utils/error'

const createUser = async (data) => {
  const user = new User(data)
  const savedUser = await user.save()
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
  const user = await User.findById(id)
  return user
}

const getUserByEmail = async (email) => {
  const user = await User.findOne({ email })
  return user
}

export default { getUserById, getUserByEmail, createUser, updateUser }
