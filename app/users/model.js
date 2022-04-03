const mongoose = require('mongoose')
let userSchema = mongoose.Schema({
   email: {
      type: String,
      require: [true, 'Email can not empty']
   },
   name: {
      type: String,
      require: [true, 'Name can not empty']
   },
   password: {
      type: String,
      require: [true, 'Password can not empty']
   },
   rule: {
      type: String,
      enum: ['admin','user'],
      default: 'admin'
   },
   status: {
      type: String,
      enum: ['Y','N'],
      default: 'Y'
   },
   phoneNumber: {
      type: String,
      require: [true, 'Phone number can not empty']
   },
}, { timestaps: true })

module.exports = mongoose.model('User', userSchema)