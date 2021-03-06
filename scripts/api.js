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

    // AJAX GET doesn't need a dataType field.
    // GET is also the default method
    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'GET',
      success: callback,
      error: error => console.log(error)
    });
  };

  const createBookmark = function (name, callback) {
    // POST store item to API
    const newBookmark = JSON.stringify(name);

    $.ajax({
      url: `${BASE_URL}/bookmarks`,
      method: 'POST',
      contentType: 'application/json',
      data: newBookmark,
      success: callback,
      error: error => console.log(error)
    });
  };

  const deleteBookmark = function (id, callback) {
    // DELETE store item from API

    $.ajax({
      url: `${BASE_URL}/bookmarks/${id}`,
      method: 'DELETE',
      success: callback,
      error: error => console.log(error)
    });
  };

  
  return {
    retrieveBookmarks,
    createBookmark,
    deleteBookmark
  };
}();