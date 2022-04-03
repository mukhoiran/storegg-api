const Bank = require('./model')

module.exports = {
   index: async(req, res)=>{
      try {
         
         const alertMessage = req.flash("alertMessage")
         const alertStatus = req.flash("alertStatus")
         const alert = { message: alertMessage, status: alertStatus }

         const bank = await Bank.find()
         res.render('admin/bank/view_bank',{
            bank,
            alert,
            name: req.session.user.name,
            title: 'Bank'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
   createView: async(req, res)=>{
      try {
         res.render('admin/bank/create', {
            name: req.session.user.name,
            title: 'Add Bank'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
   createAction: async(req, res)=>{
      try {
         const { name, bankName, accountNumber } = req.body
         
         let bank = await Bank({ name, bankName, accountNumber })
         await bank.save();

         req.flash('alertMessage', 'Successfully added bank ')
         req.flash('alertStatus', 'success')

         res.redirect('/bank')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
   editView: async(req, res)=>{
      try {
         const { id } = req.params
         const bank = await Bank.findOne({_id: id})

         res.render('admin/bank/edit', {
            bank,
            name: req.session.user.name,
            title: 'Edit Bank'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
   editAction: async(req, res)=>{
      try {
         const { id } = req.params
         const { name, bankName, accountNumber } = req.body
         
         await Bank.findOneAndUpdate({ 
            _id: id 
         }, { name, bankName, accountNumber })

         req.flash('alertMessage', 'Successfully updated bank ')
         req.flash('alertStatus', 'success')

         res.redirect('/bank')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
   deleteAction: async(req, res)=>{
      try {
         const { id } = req.params
         
         await Bank.findOneAndRemove({ 
            _id: id 
         })

         req.flash('alertMessage', 'Successfully deleted bank ')
         req.flash('alertStatus', 'success')

         res.redirect('/bank')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/bank')
      }
   },
}