'use strict';
/* global store, */

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

  const generateBookmarkHtml = function(bookmarksList) {
    // create each bookmarks' <li> using map
    // console.log(bookmarksList);

    let bookmark = bookmarksList.map( item => {
      // console.log(item);
      return `<li>
        <p data-item-id='${item.id}'>${item.title}</p>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/435814-200.png' alt='5 star rating'/>
      </li>`;
      
    });
       
    console.log(bookmark);

    if (store.expanded) {
      bookmark = bookmarksList.map( item => {
        `<li id ='${item.id}'>
        <p>${item.title}</p>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/435814-200.png' alt='5 star rating'/>
        <p>'${item.desc}'</p>
        <p>'${item.url}'</p>
        <button class='deleteButton' type='button'>Delete</button>
      </li>`;
      });
    } 

    render(bookmark);
  };

  const render = function (bookmark) {
    // render the entire page in whatever state it should be in
    $('.bookmarks').html(bookmark);
  };

  const findId = function () {
    // find the id of the clicked item (add button, min rating, expand bookmark, delete)
  };

  const handleExpandedBookmark = function () {
    // toggle expand property on store item and show new view
    $('.bookmarks').on('click', function (event) {
      event.preventDefault();
      store.toggleExpanded(event);
    });
  };

  const handleAddingBookmark = function () {
    // listen for when the user is inputting info for a new bookmark and assign input values to store
    $('');
  };

  const handleSubmittedNewBookmark = function () {
    // listen for when the user is submitting info for a new bookmark
    $('');
  };

  const handleSelectingMinimumRating = function () {
    // listen for which min rating the user wants && filter
    $('');
  };

  const handleDeleteBookmark = function () {
    //listen for when the user wants to delete a bookmark
    $('');
  };


  const allEventListeners = function () {
    handleExpandedBookmark();
    handleAddingBookmark();
    handleSubmittedNewBookmark();
    handleSelectingMinimumRating();
    handleDeleteBookmark();
  };

  return {
    render,
    allEventListeners,
    generateBookmarkHtml
  };
}();