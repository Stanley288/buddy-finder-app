import User from './model'

const createUser = async (data) => {
  console.log(data)
  const user = new User(data)
  const savedUser = await user.save()
  console.log('savedUser', savedUser.toJSON())
  return savedUser.toJSON()
}

const getUserById = async (id) => {
  const user = await User.findById(id)
  return user
}

const getUserByEmail = async (email) => {
  console.log(email)
  const user = await User.findOne({ email })
  return user
}

export default { getUserById, getUserByEmail, createUser }
