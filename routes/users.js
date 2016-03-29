var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    this.userDAO = req.userDAO;
    
    this.userDAO.getUsers(function (users){
        res.send(users);
    });
    
});

module.exports = router;
