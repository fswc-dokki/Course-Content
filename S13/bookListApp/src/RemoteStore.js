export default class RemoteStore {
    constructor() {
        this.data = [];
        this.getBooks = this.getBooks.bind(this);
        fetch("http://localhost:4000/books", {
            method: "get"
        })
            .then(res => res.json())
            .then(data => {
                this.data = data;
            })
            .catch(err => console.log(err))
            .catch(err => {
                console.error(
                    "Error occured while trying to connect to the server"
                );
            });
    }
    getBooks() {
        setTimeout(() => {return this.data}, 1000);
    }
}
