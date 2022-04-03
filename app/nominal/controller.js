const Nominal = require('./model')

module.exports = {
   index: async(req, res)=>{
      try {
         
         const alertMessage = req.flash("alertMessage")
         const alertStatus = req.flash("alertStatus")
         const alert = { message: alertMessage, status: alertStatus }

         const nominal = await Nominal.find()
         res.render('admin/nominal/view_nominal',{
            nominal,
            alert,
            name: req.session.user.name,
            title: 'Nominal'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
   createView: async(req, res)=>{
      try {
         res.render('admin/nominal/create', {
            name: req.session.user.name,
            title: 'Add Nominal'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
   createAction: async(req, res)=>{
      try {
         const { coinName, coinQuantity, price } = req.body
         
         let nominal = await Nominal({ coinName, coinQuantity, price })
         await nominal.save();

         req.flash('alertMessage', 'Successfully added nominal ')
         req.flash('alertStatus', 'success')

         res.redirect('/nominal')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
   editView: async(req, res)=>{
      try {
         const { id } = req.params
         const nominal = await Nominal.findOne({_id: id})

         res.render('admin/nominal/edit', {
            nominal,
            name: req.session.user.name,
            title: 'Edit Nominal'
         })
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
   editAction: async(req, res)=>{
      try {
         const { id } = req.params
         const { coinName, coinQuantity, price } = req.body
         
         await Nominal.findOneAndUpdate({ 
            _id: id 
         }, { coinName, coinQuantity, price })

         req.flash('alertMessage', 'Successfully updated nominal ')
         req.flash('alertStatus', 'success')

         res.redirect('/nominal')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
   deleteAction: async(req, res)=>{
      try {
         const { id } = req.params
         
         await Nominal.findOneAndRemove({ 
            _id: id 
         })

         req.flash('alertMessage', 'Successfully deleted nominal ')
         req.flash('alertStatus', 'success')

         res.redirect('/nominal')
      } catch (error) {
         req.flash('alertMessage', `${error.message}`)
         req.flash('alertStatus', 'danger')
         res.redirect('/nominal')
      }
   },
}