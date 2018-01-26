'use strict';
/* global domActions, api, store */

/*

* will hold doc ready function
  >> render page with: 
  logo
  title
  add bookmark button
  minimum rating dropdowns
  3-6 bookmarks
  all even listeners

* the store will be a visual representation of the page each time it's re-rendered
* logo and title remain at the top of each page
* view current bookmarks condensed
* expand a single bookmark
* add a new bookmark using form
* filter bookmarks by rating
* delete a bookmark

*/

$(document).ready(function () {
  domActions.allEventListeners();
  // domActions.render();
  // call to the API and get the current data. render page inside this function.
  api.retrieveBookmarks((bookmarks) => {
    bookmarks.forEach(bookmark => store.addBookmark(bookmark));
    domActions.render();
    // domActions.generateBookmarkHtml(store.bookmarksList);
  });
  
  
});