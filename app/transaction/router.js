var express = require('express');
var router = express.Router();
const { index, statusAction } = require('./controller')

const { isLoginAdmin } = require('../middleware/auth')
router.use(isLoginAdmin)

/* GET home page. */
router.get('/', index);
router.put('/status/:id', statusAction);

module.exports = router;
