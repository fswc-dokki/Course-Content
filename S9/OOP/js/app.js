// select the form
var form = document.querySelector("#book-form");

// select the input and textarea fields
var title = document.querySelector(".book-title input");
var author = document.querySelector(".book-author input");
var desc = document.querySelector(".book-desc textarea");

// handle submit event to form
form.addEventListener("submit", function(event) {
  // prevent the default action
  event.preventDefault();

  // validate the form
  var formfields = this.querySelectorAll("input, textarea");
  formfields.forEach(function(field) {
    var errorMsg = createElement(
      "p",
      "error-message",
      "Please fill this field"
    );

    if (
      field.hasAttribute("required") &&
      field.value == "" &&
      !field.classList.contains("invalid")
    ) {
      field.classList.add("invalid");
      field.parentElement.appendChild(errorMsg);

      return;
    } else {
      // reset the field if it's valid
      field.classList.remove("invalid");
      if (field.nextElementSibling) {
        field.nextElementSibling.remove();
      }
    }
  });

  //   create object of book
  var book = {
    title: title.value,
    author: author.value,
    desc: desc.value
  };

  //   make array of objects --> it's value will come from localStorage
  var cards;
  if (localStorage.getItem("cards") == null) {
    cards = [];
  } else {
    cards = JSON.parse(localStorage.getItem("cards"));
  }

  //   add the book object to the array
  cards.push(book);
  //   store in localStorage
  localStorage.setItem("cards", JSON.stringify(cards));

  // create the card with the content of form data
  createbookCard(book);

  //   reset the form
  this.reset();
  //   or
  //   form.reset();
});

// show items on loading
window.addEventListener("DOMContentLoaded", function() {
  // check if the local storage is empty
  var cards;
  if (localStorage.getItem("cards") == null) {
    cards = [];
  } else {
    cards = JSON.parse(localStorage.getItem("cards"));
  }

  //   iterate over the array of cards
  cards.forEach(function(element) {
    // 1. create the card
    createbookCard(element);
  });
});

document.querySelector(".book-cards").addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-trash-alt")) {
    var store = JSON.parse(localStorage.getItem("cards"));

    store.forEach(function(element, i) {
      if (
        element.title ===
        e.target.parentElement.parentElement.querySelector(".card-title")
          .innerText
      ) {
        store.splice(i, 1);
      }
    });

    localStorage.setItem("cards", JSON.stringify(store));
  }
});

// make the code DRY --> make a function to create a card with data provided
function createbookCard(data) {
  var card = createElement("article", "card");
  // create the content of the card with coresponding classes and text content
  var cardTitle = createElement("h2", "card-title", data.title);

  var cardDesc = createElement("p", "card-desc", data.desc);

  var cardAuthor = createElement("p", "card-author", data.author);

  var removeButton = createElement(
    "button",
    "card-remove",
    '<i class="fa fa-trash-alt"></i>'
  );

  //   attach 'click' event to the removeButton
  removeButton.addEventListener("click", function() {
    this.parentElement.remove();
  });

  // 2. append children to card
  card.appendChild(cardTitle);
  //   append the other to card
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardAuthor);
  card.appendChild(removeButton);
  // 3. append the card to book-cards
  document.querySelector(".book-cards").appendChild(card);
}

// create UI element
function createElement(el, className, content) {
  var element = document.createElement(el);

  element.className = className;

  if (content) {
    element.innerHTML = content;
  }

  return element;
}
