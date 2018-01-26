'use strict';
/* global store, api, */

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
        <p><a href='${item.url}' target='_blank'>Visit Website</a></p>
        <button class='js-delete-button' type='button'>Delete bookmark</button>
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

    const addBookmarkButton = '<button class=\'js-add-bookmark-button\' type=\'button\'>Add Bookmark</button>';

    const addingBookmarkForm = `<form>
    <fieldset>
      <p>Create a new bookmark:</p>
        <input id='js-title' type='text' placeholder='Title'>
        <p>Star rating:</p>
        <input type='radio' name='rating' value='1 star'> 1 
        <input type='radio' name='rating' value='2 stars'> 2
        <input type='radio' name='rating' value='3 stars'> 3
        <input type='radio' name='rating' value='4 stars'> 4
        <input type='radio' name='rating' value='5 stars'> 5 <br>
        <input id='js-desc' type='text' placeholder='Description'> <br>
        <input id='js-url' type='text' placeholder='URL'> <br>
        <input type='submit'>
    </fieldset>
  </form>`;
    
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
      
    // $('.js-add-min-buttons').html(addBookmarkButton + minimumRatingSelector);
    const htmlElements = generateBookmarkHtml(store.bookmarksList);
    // $('.js-bookmarks').html(elements);



    if (store.isAdding) {
      $('.js-add-min-buttons').html(addingBookmarkForm + minimumRatingSelector);
      $('.js-bookmarks').html(htmlElements);
    } 
    else {
      $('.js-add-min-buttons').html(addBookmarkButton + minimumRatingSelector);
      $('.js-bookmarks').html(htmlElements);
    }
  };

  const findBookmarkObject = function (id) {
    // find the bookmark that matches the id from findID
    return store.bookmarksList.find(item => item.id === id);
    // console.log(store.bookmarksList.find(item => item.id = id));
  };

  const handleExpandBookmark = function () {
    // toggle expand property on store item and show new view
    $('.js-bookmarks').on('click', '.expandable', event => {
      let id = $(event.currentTarget).closest('li').data('item-id');
      // console.log(id);
      let clickedBookmark = findBookmarkObject(id);
      // console.log(clickedBookmark);
      store.expandBookmark(clickedBookmark);
      render();
    });
  };

  const handleAddingBookmark = function () {
    // listen for when the user is inputting info for a new bookmark and assign input values to store
    $('.js-add-min-buttons').on('click', '.js-add-bookmark-button', event => {
      store.toggleIsAdding();
      console.log(store.isAdding);
      render();
    });
  };

  const handleSubmittedNewBookmark = function () {
    // listen for when the user is submitting info for a new bookmark
    $('.js-add-min-buttons').submit( event => {
      event.preventDefault();
      // console.log('hello');
      let rating = $('input[type=radio][name=rating]:checked').val();
      rating = parseInt(rating.split(' ')[0]);
      // console.log(typeof rating);
      const newBookmark = {
        title: $('#js-title').val(),
        url: $('#js-url').val(),
        desc: $('#js-desc').val(),
        rating: rating
      };
      // console.log(newBookmark);
      api.createBookmark(newBookmark, item => {
        console.log(item);
        store.addBookmark(item);
        store.toggleIsAdding();
        render();
      });
    });
  };

  const handleSelectingMinimumRating = function () {
    // listen for which min rating the user wants && filter
    // Get the value from a dropdown select directly
    // $("select#foo").val();
    $('');
  };

  const handleDeleteBookmark = function () {
    //listen for when the user wants to delete a bookmark
    $('.js-bookmarks').on('click', '.js-delete-button', event => {
      let deletedId = $(event.currentTarget).closest('li').data('item-id');
      // console.log(id);
      api.deleteBookmark(deletedId, () => {
        store.deleteBookmark(deletedId);
        render();
      });
    });
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
    findBookmarkObject
  };

}();