const mongoose = require('mongoose')
let categorySchema = mongoose.Schema({
   name: {
      type: String,
      require: [true, 'Category name can not empty']
   }
}, { timestaps: true })

module.exports = mongoose.model('Category', categorySchema)