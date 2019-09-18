# Session 6 Summary

1.  Data Types >>> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types) | [js.info](http://javascript.info/types)

    1. Primitives

        1. `Number`

            1. Numerical literals
                1. Decimal
                2. Octal
                3. Hexadecimal
                4. Binary
                5. Float
            2. NaN and Infinity - Safe Math
            3. BigInt

        2. `String`

            1. Laterals
            2. Template laterals
            3. Escaping characters

        3. `Boolean`
            1. Laterals
        4. `undefined` and `null`
        5. Dynamic(loosely) typing and type conversion rules between primitives >> [js.info](http://javascript.info/type-conversions)

    2. Objects >>> [js.info](http://javascript.info/object-basics)
        1. Concept of Objects
        2. Literals and `new`
        3. Properties and methods
        4. `this` and the global obj.
        5. Accessing properties using `(.)` or `[]`
        6. Check property existence
        7. deleting a prop.
        8. New features
            1. Computed property name
            2. prop. name/value shorthand
        9. Looping through props `(for .. in)`
        10. Referenced by default
        11. Cloning solutions
            1. `(for .. in)` copying
            2. `Object.assign();`
            3. Spread operator (`...`)
            4. Deep Cloning
        12. Printing an object
        13. Concept of prototype
    3. `Number` Object wrapper[W3Schools](https://www.w3schools.com/js/js_number_methods.asp) | [MDN Ref. - Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
        1. Mechanism
        2. Props and Methods
            1. `Number()`, `parseInt()`, `parseFloat()`
            2. `Number.toString()`, `Number.toExponential()`, `Number.toFixed()`, `Number.toPrecesion()`, `Number.valueOf()`
            3. `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, `NEGATIVE_INFINITY`
    4. `String` Object wrapper [W3Schools](https://www.w3schools.com/js/js_string_methods.asp) | [MDN Ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
        1. Mechanism
        2. Props and Methods
            1. `String()`, `length`
            2. `indexOf()`, `lastIndexOf()`, `search()`
            3. `slice()`, `substring()`
            4. `toUpperCase()`, `toLowerCase()`
            5. `charAt()`, `charCodeAt()`, `String.fromCharCode()`
            6. `split()`
    5. Array, just a special Object !!
        1. What is an array ? Is it contigious memory in JS??
        2. Defining an array using `[]` or `new Array(length)`
        3. The Array Object
            1. Mechanism
            2. Props and Methods
                1. Array.length
    6.  DOM Methods to access elements
        1. `document.getElementById()`
        2. `document.getElementsByTagName()`
        3. `document.getElementsByClassName()`
        4. `document.querySelector()`
        5. `document.querySelecorAll()`
    7.  Manipulating inner HTML content of an element using `innerHTML` property of DOM Elements
    8.  Accessing the list of classes using `classList` property of DOM Elements. Adding class using `classList.add()` method. Testing the existence of a class using `classList.contains()`, or even remove a class through the `classList.remove()`. 
    9. Forms in the DOM and how to access the submitted values of the fields as follows :-

            var formElement = document.querySelector("#my-form");

            //The first line of code means that this will happen when the form is submitted
            formElement.onsubmit(function(event) {
                console.log(this.username) // this prints the value of the field whose name attribute is set to "username"

                console.log(this.email) //same, this prints the submitted value of the field whose name attribute is set to "email"

                this.reset(); //this cleans the form on submit
            });
    
**General Links** : [W3Schools HTML DOM Series](https://www.w3schools.com/js/js_htmldom.asp) - this is just the first lesson do follow all the lessons | [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) | [PART2 in js.info named Browser: Document, Events, Interfaces](http://javascript.info/)

## Thank You :heart:
