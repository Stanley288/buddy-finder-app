import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema({
  message: String,
  author: String,
  group: String,
  createdAt: { type: Date, default: Date.now },
})

messageSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id // eslint-disable-line
    delete ret._id // eslint-disable-line
    delete ret.__v // eslint-disable-line
  },
})

messageSchema.pre('save', function save(next) {
  this.createdAt = Date.now
  next()
})

export default mongoose.model('Message', messageSchema)
