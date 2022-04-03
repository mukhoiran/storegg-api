var express = require('express');
var router = express.Router();
const { index, createView , createAction, editView, editAction, deleteAction } = require('./controller')

const { isLoginAdmin } = require('../middleware/auth')
router.use(isLoginAdmin)

/* GET home page. */
router.get('/', index);
router.get('/create', createView);
router.post('/create', createAction);
router.get('/edit/:id', editView);
router.put('/edit/:id', editAction);
router.delete('/delete/:id', deleteAction);

module.exports = router;
