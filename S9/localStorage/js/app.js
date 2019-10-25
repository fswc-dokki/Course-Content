// select the form
var form = document.querySelector("#book-form");

// select the input and textarea fields
var title = document.querySelector(".book-title input");
var author = document.querySelector(".book-author input");
var desc = document.querySelector(".book-desc textarea");

//Load cards when page is reloaded
document.addEventListener("DOMContentLoaded", event => {
    var list = localStorage.getItem("books");
    if (list) {
        list = JSON.parse(list);
        list.forEach(item => {
            // create the card with the content of form data
            // 1. create the card
            var card = createElement("article", "card");
            // create the content of the card with coresponding classes and text content
            var cardTitle = createElement("h2", "card-title", item.title);

            var cardDesc = createElement("p", "card-desc", item.desc);

            var CardAuthor = createElement("p", "card-author", item.author);

            var removeButton = createElement(
                "button",
                "card-remove",
                '<i class="fa fa-trash-alt"></i>'
            );

            removeButton.addEventListener("click", function() {
                var titleToSearch = this.parentElement.querySelector(
                    ".card-title"
                ).innerHTML;
                this.parentElement.remove();
                var list = localStorage.getItem("books");
                if (list) {
                    list = JSON.parse(list);
                    list.forEach((item, idx) => {
                        if (item.title === titleToSearch) {
                            return list.splice(idx, 1);
                        }
                    });
                    localStorage.setItem("books", JSON.stringify(list));
                }
            });

            // 2. append children to card
            card.appendChild(cardTitle);
            //   append the other to card
            card.appendChild(cardTitle);
            card.appendChild(cardDesc);
            card.appendChild(CardAuthor);
            card.appendChild(removeButton);
            // 3. append the card to book-cards
            document.querySelector(".book-cards").appendChild(card);
        });
    }
});

// handle submit event to form
form.addEventListener("submit", function(event) {
    // prevent the default action
    event.preventDefault();

    // validate the form
    var error = 0;
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

    // create object of book
    var book = {
        title: title.value,
        desc: desc.value,
        author: author.value
    };

    var list;
    if (!localStorage.getItem("books")) {
        list = [];
    } else {
        list = JSON.parse(localStorage.getItem("books"));
    }

    list.push(book);
    localStorage.setItem("books", JSON.stringify(list));

    // create the card with the content of form data
    // 1. create the card
    var card = createElement("article", "card");
    // create the content of the card with coresponding classes and text content
    var cardTitle = createElement("h2", "card-title", book.title);

    var cardDesc = createElement("p", "card-desc", book.desc);

    var CardAuthor = createElement("p", "card-author", book.author);

    var removeButton = createElement(
        "button",
        "card-remove",
        '<i class="fa fa-trash-alt"></i>'
    );

    //   attach 'click' event to the removeButton
    removeButton.addEventListener("click", function() {
        var titleToSearch = this.parentElement.querySelector(".card-title")
            .innerHTML;
        this.parentElement.remove();
        var list = localStorage.getItem("books");
        if (list) {
            list = JSON.parse(list);
            list.forEach((item, idx) => {
                if (item.title === titleToSearch) {
                    return list.splice(idx, 1);
                }
            });
            localStorage.setItem("books", JSON.stringify(list));
        }
    });

    // 2. append children to card
    card.appendChild(cardTitle);
    //   append the other to card
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.appendChild(CardAuthor);
    card.appendChild(removeButton);
    // 3. append the card to book-cards
    document.querySelector(".book-cards").appendChild(card);

    //   reset the form
    this.reset();
    //   or
    //   form.reset();
});

// create UI element
function createElement(el, className, content) {
    var element = document.createElement(el);

    element.className = className;

    if (content) {
        element.innerHTML = content;
    }

    return element;
}
