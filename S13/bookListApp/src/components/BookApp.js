import React, { Component } from "react";
import BookForm from "./BookForm";
import BookCardsContainer from "./BookCardsContainer";

export default class BookApp extends Component {
  constructor(props) {
    super(props);
    this.addBook = this.addBook.bind(this);
    this.state = {
      newBook: {
        title: "",
        author: "",
        desc: ""
      }
    };
  }

  addBook(title, author, desc) {
    this.setState({
      newBook: {
        title,
        author,
        desc
      }
    });
  }

  render() {
    return (
      <div className="container">
        <BookForm onSubmit={this.addBook} />
        <BookCardsContainer newBook={this.state.newBook} />
      </div>
    );
  }
}
