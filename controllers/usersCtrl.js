module.exports.users = function (req, res, next) {

    this.userDAO = req.userDAO;

    this.userDAO.getUsers(function (users) {
        res.send(users);
    });

};