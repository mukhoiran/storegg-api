var express = require('express');
var router = express.Router();
const { index, createView , createAction, editView, editAction, deleteAction, statusAction } = require('./controller')
const multer = require('multer')
const os = require('os')

const { isLoginAdmin } = require('../middleware/auth')
router.use(isLoginAdmin)

/* GET home page. */
router.get('/', index);
router.get('/create', createView);
router.post('/create', multer({ dest: os.tmpdir()}).single('image'), createAction);
router.get('/edit/:id', editView);
router.put('/edit/:id', multer({ dest: os.tmpdir()}).single('image'), editAction);
router.delete('/delete/:id', deleteAction);
router.put('/status/:id', statusAction)

module.exports = router;
