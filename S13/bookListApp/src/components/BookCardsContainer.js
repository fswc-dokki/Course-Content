import React from "react";
import BookCard from "./BookCard";

export default function BookCardsContainer(props) {
    return (
        <section className="book-cards">
            {props.data &&
                props.data.map(
                    (el, idx) =>
                        el && (
                            <BookCard
                                key={idx}
                                title={el.title}
                                author={el.author}
                                desc={el.desc}
                                deleteHandler={props.deleteHandler}
                            />
                        )
                )}
        </section>
    );
}
