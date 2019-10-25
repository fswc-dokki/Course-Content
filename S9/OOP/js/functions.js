function Book(title, author, desc) {
    this.title = title;
    this.author = author;
    this.desc = desc;
}

function UI() {}

UI.createElement = function(tagName, className, content) {
    var el = document.createElement(tagName);
    el.className = className;
    el.innerHTML = content;
}

UI.createCard = function(cardData) {
    this.createElement()
}