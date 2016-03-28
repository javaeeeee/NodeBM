var express = require('express');
var router = express.Router();
var UserDAO = require('../daos/users').UserDAO;

/* GET users listing. */
router.get('/', function(req, res, next) {
    var userDAO = new UserDAO(req.db);
    
    userDAO.getUsers(function (users){
        res.send(users);
    });
    
});

module.exports = router;
