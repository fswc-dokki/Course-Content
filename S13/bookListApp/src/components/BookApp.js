import React, { Component } from "react";
import BookForm from "./BookForm";
import BookCardsContainer from "./BookCardsContainer";
import Store from "../Store";

const store = new Store("books2");

export default class BookApp extends Component {
    constructor(props) {
        super(props);
        this.addBook = this.addBook.bind(this);
        this.updateData = this.updateData.bind(this);
        this.removeBook = this.removeBook.bind(this);
        this.state = {
            data: store.ShowAll()
        };
    }

    updateData() {
        this.setState({
            data: store.ShowAll()
        });
    }

    addBook(title, author, desc) {
        if (title !== "" && author !== "" && !store.Found({ title, author })) {
            let newBook = {
                title,
                author,
                desc
            };
            store.Add(newBook);
            this.updateData();
        }
    }

    removeBook(title, author) {
        if (title && author) {
            store.Remove({title, author});
            this.updateData();
        }
    }

    render() {
        return (
            <div className="container">
                <BookForm onSubmit={this.addBook} />
                <BookCardsContainer data={this.state.data} deleteHandler={this.removeBook}/>
            </div>
        );
    }
}
