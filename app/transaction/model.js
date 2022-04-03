const mongoose = require('mongoose')
let transactionSchema = mongoose.Schema({
   historyVoucherTopup: {
      gameName: {
         type: String,
         require: [true, 'Game name can not empty']         
      },
      category: {
         type: String,
         require: [true, 'Game category can not empty']         
      },
      thumbnail: {
         type: String
      },
      coinName: {
         type: String,
         require: [true, 'Coin name can not empty']         
      },
      coinQuantity: {
         type: String,
         require: [true, 'Coin quantity can not empty']         
      },
      price: {
         type: Number
      }
   },
   historyPayment: {
      name: {
         type: String,
         require: [true, 'Name can not empty']         
      },
      type: {
         type: String,
         require: [true, 'Payment type can not empty']         
      },
      bankName: {
         type: String,
         require: [true, 'Bank name can not empty']         
      },
      accountNumber: {
         type: String,
         require: [true, 'Account number name can not empty']         
      }
   },
   name: {
      type: String,
      require: [true, 'Name can not empty'],         
      minlength: [3, 'Name length must be between 3 - 225 characters'],
      maxlength: [225, 'Name length must be between 3 - 225 characters'],
   },
   accountUser: {
      type: String,
      require: [true, 'Account name can not empty'],         
      minlength: [3, 'Name length must be between 3 - 225 characters'],
      maxlength: [225, 'Name length must be between 3 - 225 characters'],
   },
   tax: {
      type: Number,
      default: 0,
   },
   value: {
      type: Number,
      default: 0
   },
   status: {
      type: String,
      enum: ['Pending', 'Success', 'Failed'],
      default: 'Pending'
   },
   player: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
   },
   category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
   },
   user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
   },
   historyUser: {
      name: {
         type: String,
         require: [true, 'Player name can not empty']         
      },
      phoneNumber: {
         type: Number,
         require: [true, 'Account name can not empty'],         
         minlength: [9, 'Name length must be between 9 - 13 characters'],
         maxlength: [13, 'Name length must be between 9 - 13 characters'],
      }
   }
}, { timestaps: true })

module.exports = mongoose.model('Transaction', transactionSchema)