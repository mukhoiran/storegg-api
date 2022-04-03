const mongoose = require('mongoose')
let nominalSchema = mongoose.Schema({
   coinQuantity: {
      type: Number,
      default: 0
   },
   coinName: {
      type: String,
      require: [true, 'Coin name can not empty']
   },
   price: {
      type: Number,
      default: 0
   }
}, { timestaps: true })

module.exports = mongoose.model('Nominal', nominalSchema)