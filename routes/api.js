var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

/*--- anonymous routes ---*/

router.post('/users/invite/submit', usersCtrl.inviteSubmit);

module.exports = router;