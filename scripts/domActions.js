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
    // // create each bookmarks' <li> using map

    let bookmarkHtml = bookmarksList.map(item => {
      if (item.expanded) {
        return `<li data-item-id='${item.id}'>
        <h3 class='expandable'>${item.title}</h3>
        <p>${ item.rating? item.rating : '' }</p>
        <p>${ item.desc ? item.desc : '' }</p>
        <p><a href='${item.url}'>Visit Website</p>
        <button class='deleteButton' type='button'>Delete bookmark</button>
      </li>`;
      } else {
        return `<li data-item-id='${item.id}'>
        <h3 class='expandable'>${item.title}</h3>
        <p>Figure out how to convert the rating into an image and how to write the html when the rating or description weren't included!</p>
      </li>`;
      }
    });

    return bookmarkHtml;
  };

  const render = function() {
    // render the entire page in whatever state it should be in

    // if (something about the store) {
    //   do this
    // }

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
      
    $('.js-add-min-buttons').html(addBookmarkButton + minimumRatingSelector);
    let elements = generateBookmarkHtml(store.bookmarksList);
    $('.js-bookmarks').html(elements);
  };

  // const findId = function (id) {
  //   // find the id of the clicked item (add button, min rating, expand bookmark, delete)
  //   store.bookmarksList.find(item => item.id = id);
  // };

  const findBookmarkObject = function (id) {
    // find the bookmark that matches the id from findID
    return store.bookmarksList.find(item => item.id === id);
    // console.log(store.bookmarksList.find(item => item.id = id));
  };

  const handleExpandBookmark = function () {
    // toggle expand property on store item and show new view
    $('.js-bookmarks').on('click', '.expandable', event => {

      let id = $(event.currentTarget).closest('li').data('item-id');
      console.log(id);
      let clickedBookmark = findBookmarkObject(id);
      console.log(clickedBookmark);
      store.expandBookmark(clickedBookmark);
      render();
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
    generateBookmarkHtml, // why does this have to be exposed?
    findBookmarkObject // why does this have to be exposed?
  };
}();