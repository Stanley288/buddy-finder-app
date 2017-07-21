import mongoose, { Schema } from 'mongoose'

const EventSchema = new Schema({
  onwer: {
    type: String,
    required: true,
  },
  location: {
    type: [{
      address: {
        type: String,
        required: true,
      },
      longitude: {
        type: Number,
        required: true,
      },
      latitude: {
        type: Number,
        required: true,
      },
    }],
    required: true,
  },
  participants: {
    type: [String],
    required: true,
  },
  capSize: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  description: String,
})

EventSchema.set('toJSON', {
  transform: (doc, ret) => {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
    ret.id = ret._id
    delete ret._id
    delete ret.__v
  },
})

EventSchema.pre('save', function save(next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.model('Event', EventSchema)
