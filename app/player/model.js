const mongoose = require('mongoose')
let playerSchema = mongoose.Schema({
   email: {
      type: String,
      require: [true, 'Email can not empty']
   },
   name: {
      type: String,
      require: [true, 'Name can not empty'],
      minlength: [3, 'Name length must be between 3 - 225 characters'],
      maxlength: [225, 'Name length must be between 3 - 225 characters'],
   },
   username: {
      type: String,
      require: [true, 'Username can not empty'],
      minlength: [3, 'Username length must be between 3 - 225 characters'],
      maxlength: [225, 'Username length must be between 3 - 225 characters'],
   },
   password: {
      type: String,
      require: [true, 'Password can not empty'],
      maxlength: [225, 'Password length maximum is 225 characters'],
   },
   rule: {
      type: String,
      enum: ['admin','user'],
      default: 'user'
   },
   status: {
      type: String,
      enum: ['Y','N'],
      default: 'Y'
   },
   avatar: {
      type: String
   },
   fileName: {
      type: String
   },
   phoneNumber: {
      type: String,
      require: [true, 'Phone number can not empty'],
      minlength: [9, 'Phone number length must be between 9 - 13 characters'],
      maxlength: [13, 'Phone number length must be between 9 - 13 characters'],
   },
   favorite: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   },
}, { timestaps: true })

module.exports = mongoose.model('Player', playerSchema)