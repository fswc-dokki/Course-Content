import React, { Component } from "react";
import BookCard from "./BookCard";
import Store from "../Store";

const store = new Store("books2");

export default class BookCardsContainer extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        this.setState({
            data: store.ShowAll()
        });
    }

    componentDidUpdate(props) {
        // if (props.newBook !== this.props.newBook) {
        console.log("I'm called");
        this.setState(prevState => ({
            data: prevState.data.push(props.newBook)
        }));
        store.Add(this.props.newBook);
        // }
    }
    render() {
        return (
            <section className="book-cards">
                {this.state.data &&
                    this.state.data.map(
                        (el, idx) =>
                            el && (
                                <BookCard
                                    key={idx}
                                    title={el.title}
                                    author={el.author}
                                    desc={el.desc}
                                />
                            )
                    )}
            </section>
        );
    }
}
