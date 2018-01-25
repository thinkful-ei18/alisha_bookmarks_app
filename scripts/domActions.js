'use strict';
/* global  */

/*

* listen for when a bookmark is clicked 
  >> determine id of clicked bookmark
  >> render page with expanded bookmark

* listen for when user clicks add bookmark 
  >> listen for form class/id
  >> render with add form 
  >> listen for when submit button is clicked
  >> submit button should create store item AND send info to api
  >> render page again with all condensed bookmarks, including added bookmark (.append)

* listen for when a minimum rating is selected
  >> how to place event listener on each drop down item?
  >> filter results per selected star rating
  >> render page per filter

* listen for when a delete button is clicked 
  >> find nearest parent <li> of delete button
  >> remove item from the api and the store

*/

const domActions = function() {

  const generateBookmark = function() {
    // create each bookmarks <li> 
  };

  const render = function() {
    // render the entire page in whatever state it should be in
  };

  const findId = function() {
    // find the id of the clicked item (add button, min rating, expand bookmark, delete)
  };

  const expandBookmark = function() {
    // toggle expand property on store item and show new view
    $('')
  };

  const selectAddBookmark = function() {
    // listen for when the user is inputting info for a new bookmark
    $('')
  };

  const submitAddNew = function() {
    // listen for when the user is submitting info for a new bookmark
    $('')
  };

  const selectMinimumRating = function() {
    // listen for which min rating the user wants && filter
    $('')
  };

  const deleteBookmark = function() {
    //listen for when the user wants to delete a bookmark

  };


  const allEventListeners = function() {
    expandBookmark();
    selectAddBookmark();
    submitAddNew();
    selectMinimumRating();
    deleteBookmark();
  };

  return {
    render,
    allEventListeners
  };
}();