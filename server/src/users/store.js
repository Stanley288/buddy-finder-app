import User from './model'

const createUser = async (data) => {
  const user = new User(data)
  const savedUser = await user.save()
  return savedUser.toJSON()
}

const updateUser = async (id, data) => {
  const user = await User.findById(id)
  console.log(data)
  Object.keys(data).forEach((entry) => {
    // friend list management
    console.log('entry', entry)
    if (entry === 'connections') {
      user.connections = [...user.connections, ...data.connections]
    } else {
      user[entry] = data[entry]
    }
  })
  const savedUser = await user.save()
  return savedUser.toJSON()
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
