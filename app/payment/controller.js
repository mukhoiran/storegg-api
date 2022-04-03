const Payment = require('./model')
const Bank = require('../bank/model')

module.exports = {
   index: async(req, res)=>{
      try {
         
         const alertMessage = req.flash("alertMessage")
         const alertStatus = req.flash("alertStatus")
         const alert = { message: alertMessage, status: alertStatus }

         const payment = await Payment.find().populate('banks')
         res.render('admin/payment/view_payment',{
            payment,
            alert,
            name: req.session.user.name,
            title: 'Payment'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
   createView: async(req, res)=>{
      try {
         const bank = await Bank.find()
         res.render('admin/payment/create', { 
            bank,
            name: req.session.user.name,
            title: 'Add Payment'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
   createAction: async(req, res)=>{
      try {
         const { type, banks } = req.body
         
         let payment = await Payment({ type, banks })
         await payment.save();

         req.flash('alertMessage', 'Successfully added payment ')
         req.flash('alertStatus', 'success')

         res.redirect('/payment')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
   editView: async(req, res)=>{
      try {
         const { id } = req.params
         const payment = await Payment.findOne({_id: id}).populate('banks')
         const bank = await Bank.find()

         res.render('admin/payment/edit', {
            payment,
            bank,
            name: req.session.user.name,
            title: 'Edit Payment'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
   editAction: async(req, res)=>{
      try {
         const { id } = req.params
         const { type, banks } = req.body
         
         await Payment.findOneAndUpdate({ 
            _id: id 
         }, { type, banks })

         req.flash('alertMessage', 'Successfully updated payment ')
         req.flash('alertStatus', 'success')

         res.redirect('/payment')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
   deleteAction: async(req, res)=>{
      try {
         const { id } = req.params
         
         await Payment.findOneAndRemove({ 
            _id: id 
         })

         req.flash('alertMessage', 'Successfully deleted payment ')
         req.flash('alertStatus', 'success')

         res.redirect('/payment')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/payment')
      }
   },
}