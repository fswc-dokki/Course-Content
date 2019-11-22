export default class Store {
    constructor(listName) {
        this.listName = listName;
        if (localStorage.getItem(listName)) {
            this.data = JSON.parse(localStorage.getItem(listName));
        } else {
            this.data = [];
            localStorage.setItem(listName, JSON.stringify(this.data));
        }
    }

    UpdateData() {
        localStorage.setItem(this.listName, JSON.stringify(this.data));
    }

    Add(dataObject) {
        this.data.push(dataObject);
        this.UpdateData();
    }

    Remove(key, value) {
        this.data.forEach((el, idx) => {
            if (el[key] === value) {
                return this.data.splice(idx, 1);
            }
        });
        this.UpdateData();
    }

    ShowAll() {
        let listString = localStorage.getItem(this.listName);
        return listString ? JSON.parse(listString) : [];
    }
}
