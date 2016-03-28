/**
 * A module that provides methods to access bookmarks using MongoDB driver.
 * 
 * @author Dmitry Noranovich
 */
var assert = require('assert');
function BookmarkDAO(db) {
    /**
     * A method to extract a bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.getBookmark = function(bmID, callback){
        callback();
    }
    /**
     * A method to create a new bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.addBookmark = function(callback){
        callback();
    }
    /**
     * A method to delete a bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.deleteBookmark = function(callback){
        callback();
    }
}

module.exports.BookmarkDAO = BookmarkDAO;