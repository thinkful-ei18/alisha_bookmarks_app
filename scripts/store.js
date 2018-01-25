'use strict';
/* global  */

/* 

const store = {
  list: [{
     title: ‘title’,
     rating: rating,
     expanded: false
     }],
  isAdding: false,
  minRating: false
}

*/

const store = function() {

  const addBookmark = function() {
    //push bookmarks to the store array
  };

  const deleteBookmark = function () {
    // remove bookmarks from the store array
  };  

  const toggleIsAdding = function() {
    //
  };

  const toggleMinRating = function() {
    // 
  };


  return {
    bookmarksList: [],
    isAdding: false,
    minRating: false,

    addBookmark,
    deleteBookmark,
    toggleIsAdding,
    toggleMinRating
  };

}();