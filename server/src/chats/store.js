import { Order, Counter } from './model'
// import config from '../config'
//
// const statuses = ['created', 'paid', 'recorded']
//
// const createEmptyOrder = async (input) => {
//   const { orderId, invoices, pickupAt, location, personalDataId } = input
//
//   const order = new Order({
//     orderId,
//     pickupAt,
//     invoices,
//     location,
//     emailed: false,
//     personalDataId,
//     status: 'created',
//   })
//   const savedOrder = await order.save()
//
//   return savedOrder
// }
//
// const updateOrderWithPayment = (id, { payment }) =>
// Order.findByIdAndUpdate(id, {
//   payment,
//   status: 'paid',
// }, { new: true })
//
// const updateOrderWithPersonalData = (id, { personalDataId }) =>
// Order.findByIdAndUpdate(id, {
//   personalDataId,
//   status: 'personalized',
// }, { new: true })
//
// const updateOrderWithTransaction = id =>
//   Order.findByIdAndUpdate(id, {
//     status: 'recorded',
//   }, { new: true })
//
// const updateOrderWithEmail = id =>
//   Order.findByIdAndUpdate(id, {
//     status: 'emailed',
//   }, { new: true })
//
// const queryOrdersByStatus = async (status) => {
//   const query = status === 'EMAILED' ? { status: 'emailed' } : { $or: statuses.map(x => ({ status: x })) }
//   const order = Order.find(query)
//
//   return order
// }
//
// const getNextSequence = async (id) => {
//   let counter = await Counter.findOneAndUpdate({ id }, { $inc: { seq: 1 } }, { new: true })
//   if (!counter) {
//     counter = await Counter.create({ id, seq: 1 })
//   }
//
//   return counter.seq
// }
//
// const createOrderId = async () => {
//   const nextId = await getNextSequence('orderId')
//
//   return config.orderIdType === 'unique' ? `P-IPS-${nextId}-${Date.now()}` : `P-IPS-${nextId}`
// }
//
// export default {
//   queryOrdersByStatus,
//   createEmptyOrder,
//   createOrderId,
//   getNextSequence,
//   updateOrderWithPayment,
//   updateOrderWithTransaction,
//   updateOrderWithEmail,
//   updateOrderWithPersonalData,
// }
