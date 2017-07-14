import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema ({
  id: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  friends: [String],
  friendsRequested: [String],
  friendsPending: [String],
  gender: String,
  avatar: String,
  age: Number,
  name: String,
})

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
  },
})

UserSchema.pre('save', function save(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('User', UserSchema)
