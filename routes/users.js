const express = require('express');
const usersCtrl = require('../controllers/usersCtrl');

const router = express.Router();

/* GET users listing. */
router.get('/', usersCtrl.users);

module.exports = router;
