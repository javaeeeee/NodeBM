/**
 * A module that provides methods to access bookmarks using MongoDB driver.
 * 
 * @author Dmitry Noranovich
 */
var assert = require('assert');

/**
 * A bookmarks data access object.
 * 
 * @param db - MongoDB database handle.
 */
function BookmarkDAO(db) {
    "use strict";
    
    /**
     * A method to extract a bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.getBookmark = function(bmID, callback){
        "use strict";
        
        callback();
    }
    
    /**
     * A method to create a new bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.addBookmark = function(callback){
        "use strict";
        
        callback();
    }
    
    /**
     * A method to delete a bookmark.
     * @param {function} callback - the callback to call when method succeeds.
     */
    this.deleteBookmark = function(callback){
        "use strict";
        
        callback();
    }
}

module.exports.BookmarkDAO = BookmarkDAO;