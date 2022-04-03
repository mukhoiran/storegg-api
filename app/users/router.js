var express = require('express');
var router = express.Router();
const { signinView, signinAction, signoutAction } = require('./controller')

/* GET home page. */
router.get('/', signinView);
router.post('/', signinAction);
router.get('/logout', signoutAction);

module.exports = router;
