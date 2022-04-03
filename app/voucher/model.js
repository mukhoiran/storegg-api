const mongoose = require('mongoose')
let voucherSchema = mongoose.Schema({
   name: {
      type: String,
      require: [true, 'Game name can not empty']
   },
   status: {
      type: String,
      enum: ['Y','N'],
      default: 'Y'
   },
   thumbnail: {
      type: String
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   },
   nominals: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Nominal'
   }],
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
}, { timestaps: true })

module.exports = mongoose.model('Voucher', voucherSchema)