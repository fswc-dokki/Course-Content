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

    Found(comparisonObj) {
        // Flag is set initially to false so that if there's no data at all it returns false
        let flag = false; 
        
        // loop over the data using the for..of loop instead of forEach
        for (let el of this.data) {
            // Everytime we do the comparison we start the flag with "true" assuming the element is found
            flag = true; 
            for (let [key, value] of Object.entries(comparisonObj)) {
                // Here we test it against all keys of the comparisonObject
                flag &= el[key] === value;
                // If at least 1 of the comparison criterea is false, we exit the comparison loop
                if (!flag) break; 
            }
            // If the flag passed all the comparison criterea without changing to "false",
            // this means we found the item so no need to complete the rest of items
            if (flag) break;
        }
        return flag;
    }

    Add(dataObject) {
        this.data.push(dataObject);
        this.UpdateData();
    }

    Remove(comparisonObj) {
        this.data.forEach((el, idx) => {
            let flag = true;
            for (let [key, value] of Object.entries(comparisonObj)) {
                if (el[key] !== value) {
                    flag = false;
                    break;
                }
            }
            if (flag) return this.data.splice(idx, 1);
        });
        this.UpdateData();
    }

    ShowAll() {
        let listString = localStorage.getItem(this.listName);
        return listString ? JSON.parse(listString) : [];
    }
}
