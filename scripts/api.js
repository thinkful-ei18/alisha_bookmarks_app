'use strict';
/* global  */

/*

* retrieve list of bookmarks from api
* create a new bookmark
* delete a bookmark

*/

const api = function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/alisha';

  const retrieveBookmarks = function(callback) {
    // GET all store items from API
    // console.log(callback);

    // AJAX GET doesn't need a dataType field.
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'GET',
      success: callback,
      error: error => console.log(error)
    });
    // console.log('hello');
  };

  const createBookmark = function () {
    // POST store item to API
  };

  const deleteBookmark = function () {
    // DELETE store item from API
  };

  return {
    retrieveBookmarks,
    createBookmark,
    deleteBookmark
  };
}();