const mongoose = require('mongoose')
let bankSchema = mongoose.Schema({
   name: {
      type: String,
      require: [true, 'Name can not empty']
   },
   bankName: {
      type: String,
      require: [true, 'Bank name can not empty']
   },
   accountNumber: {
      type: String,
      require: [true, 'Account number name can not empty']
   }
}, { timestaps: true })

module.exports = mongoose.model('Bank', bankSchema)