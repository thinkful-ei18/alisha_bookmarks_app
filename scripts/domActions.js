'use strict';
/* global store, */

/*

* listen for when a bookmark is clicked 
  >> determine id of clicked bookmark
  >> render page with expanded bookmark
  >> include delete button

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
    let bookmark = bookmarksList.map( item => {
      return `<li data-item-id='${item.id}'>
        <p class='expandable'>${item.title}</p>
        <img src='https://d30y9cdsu7xlg0.cloudfront.net/png/435814-200.png' alt='5 star rating'/>
      </li>`;
      
    });
       
    console.log(bookmark);

    if (store.expanded) {
      
      bookmark = bookmarksList.find( item => {
        `<li data-item-id='${item.id}'>
        <p class='expandable'>${item.title}</p>
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

    const addBookmarkButton = '<button class=\'js-add-bookmark-button\' type=\'button\'>Add Bookmark</button>';
    
    const minimumRatingSelector = `<form name='minimumRating' action='' method="POST">
        <div>
          <select>
            <option value='minRating'>Minimum Rating</option>
            <option value='1 star'>1 star</option>
            <option value='2 stars'>2 stars</option>
            <option value='3 stars'>3 stars</option>
            <option value='4 stars'>4 stars</option>
            <option value='5 stars'>5 stars</option>
            <option value='clear'>Clear Ratings</option>
          </select>`;
      
    $('.js-buttons').append(addBookmarkButton, minimumRatingSelector);
    // $('.js-buttons').html(minimumRatingSelector);
    $('.js-bookmarks').html(bookmark);
  };

  const findId = function (id) {
    // find the id of the clicked item (add button, min rating, expand bookmark, delete)
    store.bookmarksList.find(item => item.id = id);
  };

  const handleExpandBookmark = function () {
    // toggle expand property on store item and show new view
    $('.expandable').on('click', event => {
      // store.toggleExpanded();
      let id = $(event.currentTarget).closest('li').attr('data-item-id');
      console.log(id);
      findId(id);
      // how to expand just one bookmark?
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
    handleExpandBookmark();
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