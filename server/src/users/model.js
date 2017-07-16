import mongoose, { Schema } from 'mongoose'

const connectionStatus = ['BEFRIENDED', 'PENDING', 'REQUESTED', 'BLOCKED']

const UserSchema = new Schema({
  authId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  connections: [{
    id: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      enum: connectionStatus,
    },
  }],
  gender: String,
  avatar: String,
  age: Number,
  name: String,
  updatedAt: Date,
})

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    return ret
  },
})

UserSchema.pre('save', function save(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('User', UserSchema)
