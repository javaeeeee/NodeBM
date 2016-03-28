/**
 * A module that provides methods to access bookmarks using MongoDB driver.
 * 
 * @author Dmitry Noranovich
 * @exports UserDAO 
 */
var assert = require('assert');

var users = [
    {
        _id: 1,
        name: 'linda'
    },
    {
        _id: 2,
        name: 'luke'
    }
];

function UserDAO(db) {
    assert.notEqual(db, null, "Didn't obtain the database handle in UserDAO");
    /**
     * Method returns the list of users.
     * @param {function} callback - the callback to call when method succeeds.
     * @returns {array} - the list of users.
     */
    this.getUsers = function(callback){
        callback(users);
    }    
    
    /**
     * A method to create a new user.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.addUser = function(callback){
        callback();
    }
    /**
     * A method to change password.
     * @param {string} username - the name of the user to change password.
     * @param {string} oldPass - the old password.
     * @param {string} newPass - the new password. 
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.changePass = function(username, oldPass, newPass, callback){
        callback();
    }
}

module.exports.UserDAO = UserDAO;