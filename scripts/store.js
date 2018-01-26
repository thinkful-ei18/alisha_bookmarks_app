'use strict';
/* global  domActions, */

/* 

const store = {
  list: [{
     "title": "title",
     "url": "url",
     }],
  expanded: false
  isAdding: false,
  minRating: false
}

* the store should not call any functions, it's to be called upon

*/

const store = function() {
/**
 * 
 * @param {object} bookmark 
 */
  const addBookmark = function(bookmark) {
    //push bookmarks to the store array from form on dom
    // console.log(bookmark);
    bookmark.expanded = false;
    store.bookmarksList.push(bookmark);
    // console.log(store.bookmarksList);
  };

  const deleteBookmark = function () {
    // remove bookmarks from the store array
  };  

  const expandBookmark = function (clickedBookmark) {
    if (clickedBookmark.expanded === false) {
      clickedBookmark.expanded = true;
    } else {
      clickedBookmark.expanded = false;
    }
    console.log(clickedBookmark.expanded);
  };

  const toggleIsAdding = function() {
    this.isAdding = !this.isAdding;
  };

  const toggleMinRating = function() {
    // no need to toggle
    this.minRating = !this.minRating;
  };


  return {
    bookmarksList: [],
    isAdding: false,
    minRating: false,

    addBookmark,
    deleteBookmark,
    expandBookmark,
    toggleIsAdding,
    // toggleMinRating
  };

}();



/* 
items to add back to store since the page refreshes every 24 hours:

{
  "title": "Black Panther",
  "url": "http://www.imdb.com/title/tt1825683/?ref_=nv_sr_2",
  "desc": "T'Challa, after the death of his father, the King of Wakanda, returns home to the isolated, technologically advanced African nation to succeed to the throne and take his rightful place as king.",
  "rating": 5
}

{
  "title": "Harry Potter and the Prisoner of Azkaban",
  "url": "http://www.imdb.com/title/tt0304141/",
}

{
  "title": "The Greatest Showman",
  "url": "http://www.imdb.com/title/tt1485796/?ref_=nv_sr_1",
  "desc": "Celebrates the birth of show business, and tells of a visionary who rose from nothing to create a spectacle that became a worldwide sensation.",
  "rating": 5
}

*/