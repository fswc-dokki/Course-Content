export default class Store {
    constructor(listName) {
        this.listName = listName;
        if (localStorage.getItem(listName)) {
            this.data = JSON.parse(localStorage.getItem(listName));
        } else {
            this.data = [];
            localStorage.setItem(listName, data);
        }
    }

    ShowAll() {
        return JSON.parse(localStorage.getItem(this.listName));
    }
}