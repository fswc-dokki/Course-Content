# Session 4 Summary

### In the previous session, we covered :-

1. CSS Flex Box 
   - Flex Container properties
     - `display: flex;`
     - `flex-direction`
     - `flex-wrap`
     - `justify-content`
     - `justify-items`
     - `align-content`
     - `align-items`
   - Flexbox properties
     - `flex-basis`
     - `flex-grow`
   - __Links__ >> [CSS Tricks complete guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) | [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
   
2. CSS Media Queries
   1. __Syntax Example__

            @media only screen and (max-width: 768px) {
                .grid .grid-item {
                    width: 100%;
                }
            }

    1. __Links__ >> [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) | [CSS-Tricks](https://css-tricks.com/css-media-queries/)
 3. History of _Javascript_ >> [article on Medium](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)
 4. Intro to Javascript >> [js.info](https://javascript.info/intro) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)
 5. Where to write _Javascript_
    - `<script> ` tag

            <head>
                ...
                <script>
                    <!--JS goes here!-->
                </script>
                ...
            </head>
        or

            <body>
                ...
                <script>
                    <!--JS goes here!-->
                </script>
            </body>

    - External file with the `.js` extension
        
        in `main.js`

            alert("Hello World);
        in `index.html`

            <html>
                <head>
                    ...
                    <script src="./main.js"></script>
                </head>
                <body>
                    ...
                </body>
            </html>

    - __Links__ >> [W3Schools](https://www.w3schools.com/js/js_whereto.asp)
6. Hello, World! (Interaction with the broswer)
   - In the console

            console.log("Hello, World!");

    - As a message to the user

            alert("Hello, World!");

    - Or in the webpage

            document.write("Hello, World!");
        or even better
            
            document.write("<h1>Hello, World!</h1>");
    - __Links__ >> [W3schools](https://www.w3schools.com/js/js_output.asp) |   [js.info](https://javascript.info/alert-prompt-confirm)
7. Operators
   1.  __Aritmatic__ : `+, -, *, /, %`
   2.  __Logical__ : `&&, ||, !, ^`
   3.  __Assignment__ : `=, +=, -=, *=, /=, %=`
   4. __Comparison__  : `==, ===, <, <=, >, >=`

   __Links__ >> [W3schools](https://www.w3schools.com/js/js_operators.asp)

8.  Variables & Functions
    1.  Understanding Variables as a programming concept >> [js.info](https://javascript.info/variables)
    2.  `var`, `let` and `const` Keywords >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
    3.  Scope and Hoisting - advanced somehow :sweat_smile: - >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
    4.  Creating a function 

        Named

            function functionName(parameters) {
                code here ..
            }
        or Anonymous using function expression

            var functionName = function(parameters) {
                code here ..
            }
    5. Invocation (calling) of a function

            function addTwoNumbers(x, y) {
                return x + y;
            }

            let sum = addTwoNumbers(10, 20); //this stores 30 in the variable sum

            console.log(addTwoNumbers(3, 5)); // this prints 8 to the console
    6. passing a function as a parameter to another one

            function printResult(x, y, func) { //func is a function
                console.log(func(x, y));
            }

            //So lets call the function
            printResults(3, 5, function(x, y) {
                return x+y;
            }); // this prints 8 in the console

            //or another way
            function addTwoNumbers(x, y) {
                return x + y;
            }

            //Let's call it again
            printResults(3, 5, addTwoNumbers) // this also prints 8 in the console
      7. __Links for functions__ : [W3Schools](https://www.w3schools.com/js/js_functions.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) | [js.info 1](https://javascript.info/function-basics) | [js.info 2](https://javascript.info/function-expressions-arrows)

9.  Data Types >> [js.info](https://javascript.info/types) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Data_structures_and_types)
    1. _Number_ >> [W3Schools 1](https://www.w3schools.com/js/js_numbers.asp) | [W3Schools 2](https://www.w3schools.com/js/js_number_methods.asp) | [MDN Guide 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates) - good as a beginning | [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
    2. _String_ >> [W3Schools 1](https://www.w3schools.com/js/js_strings.asp) | [W3Schools 2](https://www.w3schools.com/js/js_number_methods.asp) | [MDN Guide 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Text_formatting) - good as a beginning | [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
    3. _Boolean_ >> [W3Schools](https://www.w3schools.com/js/js_booleans.asp) | [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
    4. _Object_ >> [W3Schools](https://www.w3schools.com/js/js_objects.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics) | [js.info](https://javascript.info/object)
    5. _Array_ >> [W3Schools 1](https://www.w3schools.com/js/js_arrays.asp) | [W3Schools 2](https://www.w3schools.com/js/js_array_methods.asp) | [W3Schools 3](https://www.w3schools.com/js/js_array_sort.asp) | [W3Schools 4](https://www.w3schools.com/js/js_array_iteration.asp) | [MDN Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Array_object) - Perrfect as a start ! | [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    6. _undefined_ >> [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined)

10. Conditinal Statments (`if`, `else if` and `else`)
    - __Syntax__
     
            if(put the condition here) {
                some code ...
            }
        or
        
            if (condition) {
                some code ..
            } else {
                some other code ..
            }
        or even
            
            if (condition) {
                some code ...
            } else if (another condition) {
                some code ..
            } else if (third condition) {

            }
            ....
            } else {
                some code ...
            }

    - __Links__ >> [js.info](http://javascript.info/ifelse) - verrry useful - | [W3schools](https://www.w3schools.com/js/js_if_else.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#Conditional_statements)
 6.  Loops

     - __Syntax__

            for (var i = 0; i < 10; i++) {
                some code ...
            }
            This is repeated 10 times
    
        or
            
            var i = 0;
            while (i < 10) {
                some code ...
                i++;
            }
            this does the same as the above
        or with arrays

            const arr = ['Apples', 'Banana', 'Orange'];

            arr.forEach(function(fruit){
                console.log(fruit);
            })

            //This prints to the console >>
            //  Apples
            //  Banana
            //  Orange
    
      - __Links__ >> [js.info](http://javascript.info/while-for) | [W3schools - for](https://www.w3schools.com/js/js_loop_for.asp) | [W3schools - while](https://www.w3schools.com/js/js_loop_while.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration) - it contains some extras.

12. ES6 Arrow Function

    __Syntax__

        var func1 = (x, y) => {
            some code ...
        }
        //this is equivalent to
        var func2 = function(x, y) {
            some code ...
        }

        //Arrow functions can also be passed as a parameter
        outFunction(param1, param2, (x, y) => {
            code here ...
        });

    __Links__ >> [W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)

## Extra Resources :-
 1. [CSS Tricks](https://css-tricks.com/) 
 2. __You Don't Know Javascript ("ydkjs" for short)__ : great book by [@getify](https://github.com/getify "Kyle Simpson"), find it free [here](https://github.com/getify/You-Dont-Know-JS).
 3. Javascript.info