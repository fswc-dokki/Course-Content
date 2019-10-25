// select the form
const form = document.querySelector("#book-form"); // const

// select the input and textarea fields
const title = document.querySelector(".book-title input");
const author = document.querySelector(".book-author input");
const desc = document.querySelector(".book-desc textarea");

// handle submit event to form
form.addEventListener("submit", function(event) {
  // prevent the default action
  event.preventDefault();

  // validate the form
  const formfields = this.querySelectorAll("input, textarea");
  formfields.forEach(field => {
    // arrow function
    let errorMsg = createElement(
      // let
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
  let book = {
    title: title.value,
    author: author.value,
    desc: desc.value
  };

  //   make array of objects --> it's value will come from localStorage
  let cards;
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
window.addEventListener("DOMContentLoaded", () => {
  // check if the local storage is empty
  let cards;
  if (localStorage.getItem("cards") == null) {
    cards = [];
  } else {
    cards = JSON.parse(localStorage.getItem("cards"));
  }

  //   iterate over the array of cards
  cards.forEach(element => createbookCard(element)); // arrow function in another function
});

// make the code DRY --> make a function to create a card with data provided
let createbookCard = data => {
  let card = createElement("article", "card");

  let cardTitle = createElement("h2", "card-title", data.title);

  let cardDesc = createElement("p", "card-desc", data.desc);

  let cardAuthor = createElement("p", "card-author", data.author);

  let removeButton = createElement(
    "button",
    "card-remove",
    '<i class="fa fa-trash-alt"></i>'
  );

  removeButton.addEventListener("click", function() {
    // remove from UI
    this.parentElement.remove();
  });

  //   append these elements into card
  card.appendChild(cardTitle);
  card.appendChild(cardDesc);
  card.appendChild(cardAuthor);
  card.appendChild(removeButton);

  // append card into book cards
  document.querySelector(".book-cards").appendChild(card);
};

// create UI element
let createElement = (
  el,
  className,
  content = "No content provided" // default parameters
) => {
  let element = document.createElement(el);

  element.className = className;

  element.innerHTML = content;

  return element;
};

document.querySelector(".book-cards").addEventListener("click", function(e) {
  if (e.target.classList.contains("fa-trash-alt")) {
    let store = JSON.parse(localStorage.getItem("cards"));

    store.forEach((el, i) => {
      if (
        el.title ===
        e.target.parentElement.parentElement.querySelector(".card-title")
          .innerText
      ) {
        return store.splice(i, 1);
      }
    });

    localStorage.setItem("cards", JSON.stringify(store));
  }
});
