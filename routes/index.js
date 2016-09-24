var express = require('express');
var mainCtrl = require('../controllers/mainCtrl');
var router = express.Router();

/* GET home page. */
router.get('/', mainCtrl.index);

module.exports = router;
