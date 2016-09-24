function users(req, res, next) {

  this.userDAO = req.userDAO;

  this.userDAO.getUsers((users) => {
    res.send(users);
  });
}

module.exports.users = users;
