/**
 * A module that provides methods to access bookmarks using MongoDB driver.
 * 
 * @author Dmitry Noranovich
 * @exports UserDAO 
 */
var assert = require('assert');

/**
 * DAO for users
 * 
 * @param db - MongoDB database handle.
 */
function UserDAO(db) {
    "use strict";

    assert.notEqual(db, null, "Didn't obtain the database handle in UserDAO");
    this.db = db;

    /**
     * Method returns the list of users.
     * @param {function} callback - the callback to call when method succeeds.
     * @returns {array} - the list of users.
     */
    this.getUsers = function(callback) {
        "use strict";
        this.db.collection('users').find({}).toArray(function(err, users) {
            assert.equal(err, null, "Error extracting users.");

            callback(users);
        });
    }

    /**
     * A method to create a new user.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.addUser = function(callback) {
        "use strict";

        callback();
    }

    /**
     * A method to change password.
     * @param {string} username - the name of the user to change password.
     * @param {string} oldPass - the old password.
     * @param {string} newPass - the new password. 
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.changePass = function(username, oldPass, newPass, callback) {
        "use strict";

        callback();
    }
}

module.exports.UserDAO = UserDAO;