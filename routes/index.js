const express = require('express');
const mainCtrl = require('../controllers/mainCtrl');
const router = express.Router();

/* GET home page. */
router.get('/', mainCtrl.index);

module.exports = router;
