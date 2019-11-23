import React from "react";

export default function BookCard(props) {
    return (
        <article className="card">
            <h2 className="card-title">{props.title}</h2>
            <p className="card-desc">{props.desc}</p>
            <p className="card-author">{props.author}</p>
            <button className="card-remove" onClick={() => {props.deleteHandler(props.title, props.author)}}>
                <i className="fa fa-trash-alt"></i>
            </button>
        </article>
    );
}
