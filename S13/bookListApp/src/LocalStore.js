export default class LocalStore {
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

    Remove(comparisonObject) {
        let flag = true;
        this.data.forEach((el, idx) => {
            for (let [key, value] of Object.entries(comparisonObject)) {
                if (el[key] !== value) {
                    flag = false;
                    break;
                };
            }
            if (flag)
                return this.data.splice(idx, 1);
        });
        this.UpdateData();
    }

    ShowAll() {
        let listString = localStorage.getItem(this.listName);
        return listString ? JSON.parse(listString) : [];
    }
}
