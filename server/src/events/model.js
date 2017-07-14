import mongoose, { Schema } from 'mongoose'

const EventSchema = new Schema ({
  geolocation: {
    type: String,
    required: true
  },
  participants: {
    type: [String],
    required: true
  },
  cap_size: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  time: {
    type: Date,
    required: true
  }
})

const UserSchema = new Schema ({
  user_id: {
    type: String,
    required: true
  },
  friends: [String],
  email: {
    type: String,
    required: true
  },
  pending_approval: [String],
  requested: [String],
  gender: {
    type: String,
    required: true
  },
  profile_picture: ,//not sure
  age: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  martial_status: String
})


UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.hash
    delete ret.salt
  },
})

EventSchema.set('toJSON', {
  transform: (doc, ret) => {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
    ret.id = ret._id
    delete ret._id
    delete ret.__v
    delete ret.hash
    delete ret.salt
  },
})

UserSchema.pre('save', function save(next) {
  this.updatedAt = new Date()
  next()
})

EventSchema.pre('save', function save(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('User', UserSchema)
export default mongoose.model('Event', EventSchema)
