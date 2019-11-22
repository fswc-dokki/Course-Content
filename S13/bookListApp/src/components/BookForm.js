import React from "react";

export default function BookForm(props) {
    return (
        <form
            id="book-form"
            onSubmit={e => {
                e.preventDefault();
                const data = {
                    title: e.target.title.value,
                    author: e.target.author.value,
                    desc: e.target.desc.value
                };
                props.onSubmit(data.title, data.author, data.desc);
            }}
            noValidate
        >
            <section className="book-title field">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" required />
            </section>

            <section className="book-author field">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" required />
            </section>

            <section className="book-desc field">
                <label htmlFor="desc">Description</label>
                <textarea id="desc" cols="30" rows="10"></textarea>
            </section>

            <input type="submit" className="form-submit" value="Add Book" />
        </form>
    );
}
