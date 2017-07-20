import mongoose, { Schema } from 'mongoose'

const conversationSchema = new Schema({
  message: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
}, { _id: false, __v: false })

const chatSchema = new Schema({
  pariticpants: [String],
  conversation: [conversationSchema],
})

chatSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.sessionId = ret._id // eslint-disable-line
    delete ret._id // eslint-disable-line
    delete ret.__v // eslint-disable-line
  },
})

chatSchema.pre('save', function save(next) {
  this.createdAt = Date.now
  next()
})

export default mongoose.model('Chat', chatSchema)
