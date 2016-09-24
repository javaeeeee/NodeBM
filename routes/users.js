var express = require('express');
var usersCtrl = require('../controllers/usersCtrl');
var router = express.Router();

/* GET users listing. */
router.get('/', usersCtrl.users);

module.exports = router;
