# Session 5 Summary - Intro to JS

## In the previous session, we covered :-

1. Intro to programming languages and concepts
    1. How the computer understand it?
    2. Definition
    3. Compiled or Interpretted
    4. Type (strong - loose)
    5. Paradigm (functional / OOP)
    6. Static or dynamic in classes
2. Javascript overview
    1. The power of JS
        1. Ruling the Web >> [W3Tech Stats](https://w3techs.com/technologies/details/cp-javascript/all/all)
        2. Trendy on Github >> [GitHut](https://githut.info/)
        3. The only ready-to-go scripting language for the web - the frontend part of it -, all others are compiled to it >> [Medium article](https://codeburst.io/8-javascript-alternatives-for-web-developers-to-consider-22f8d38bdfa9)
        4. APIs, like Web APIs including DOM, Window, Browser, Navigator, ... >> [MDN](https://developer.mozilla.org/en-US/docs/Web/API)
    2. History of JS3 >>> [Medium Article](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)
        1. Started as LiveScript at NetScape
        2. Evolved to JavaScript because its java-like syntax for marketing purposes
        3. Ecma International hosted the standerdization so it became ECMAScript
        4. ECMA-262 to ES TC39 to ES3 in 1999
        5. ES4
        6. ES5 - last browser support
        7. ES6 or ES2015 and yearly updates
    3. Properties of JS >>> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
        1. Compiled or interpreted >>> [Medium Article](https://medium.com/@bvipul/javascript-interpreted-or-compiled-eeb1403fe814)
        2. Loosely typed - TS
        3. First-class functions <!-- I may move this to the functions section -->
        4. Prototype based <!-- I may move this to the Objects section -->
        5. Multi-paradigm
    4. How JS Works >>> Book 2 - ydkjs
        1. Engines (V8 - SpiderMonkey)
        2. Scoping
        3. Compiler tokenization and lexing
        4. Code execution
    5. Where can JS run ?
        1. Browsers
        2. Envirnoments
    6. The power of JS
        1. Web APIs 1. Browser API 2. WebGL
           2.cd
    7. Writing "Hello, World!"
        1. `<script>` tag up and down <!-- Don't forget to explain the difference in the DOM part-->
        2. External file
        3. As event listener in HTML Elements <!--We gonna know this later on-->
3. Input/Output (I/O) and Debugging
    1. Chrome DevTools >> [js.info](http://javascript.info/devtools) | [js.info - advanced](http://javascript.info/debugging-chrome)
    2. `console.log()` >> [W3Schools](https://www.w3schools.com/js/js_output.asp)
    3. `alert()` >> [js.info](http://javascript.info/alert-prompt-confirm)
    4. `propmt()`>> [js.info](http://javascript.info/alert-prompt-confirm)
    5. `confirm()`>> [js.info](http://javascript.info/alert-prompt-confirm)
    6. `document.write()` >> [W3Schools](https://www.w3schools.com/js/js_output.asp)
    7. `document.write(<html>)` >> [W3Schools](https://www.w3schools.com/js/js_output.asp)
    8. `document.getElementById('id').innerHTML` >> [W3Schools](https://www.w3schools.com/js/js_output.asp)

4)  Variables & Functions

1.  Understanding Variables as a programming concept >> [js.info](https://javascript.info/variables)
2.  `var`, `let` and `const` Keywords >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Declarations)
3.  Scope and Hoisting - advanced somehow :sweat_smile: - >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Variable_scope)
4.  Memory managment in JS >>> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management) | [Medium article](https://medium.com/front-end-weekly/understanding-javascript-memory-management-using-garbage-collection-35ed4954a67f)
5.  How JS is a first-class function language ? <!-- Discussed more in the Objects section -->
6.  Creating a function

        Named

        	function functionName(parameters) {
        		code here ..
        	}

        or Anonymous using function expression

            var functionName = function(parameters) {
                code here ..
            }

    7.  Invocation (calling) of a function

            function addTwoNumbers(x, y) {
                return x + y;
            }

            let sum = addTwoNumbers(10, 20); //this stores 30 in the variable sum

            console.log(addTwoNumbers(3, 5)); // this prints 8 to the console

    8.  passing a function as a parameter to another one

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

    9.  **Links for functions** : [W3Schools](https://www.w3schools.com/js/js_functions.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) | [js.info 1](https://javascript.info/function-basics) | [js.info 2](https://javascript.info/function-expressions-arrows)

7.  Operators

    1. Unary or Binary
    2. **Aritmatic** : `+, -, *, /, %, ++, --, +(unary), -(unary), **`
    3. **Assignment** : `=, +=, -=, *=, /=, %=`
    4. **Comparison** : `==, ===, !=, !== <, <=, >, >=`
    5. **Logical** : `&&, ||, !, ^`
    6. **Others** : `(.), (,), typeof, instanceof, delete, []`
    7. Precedence

    **Links** >> [W3schools](https://www.w3schools.com/js/js_operators.asp) | [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

## Extra Resources

1. [Browser Rendering Optimization Course on Udemy](https://www.udacity.com/course/browser-rendering-optimization--ud860) - Good Intro to know about browsers and how they work
2. [Webstite Rendering Optimization Course on Udemy](https://www.udacity.com/course/website-performance-optimization--ud884) - optimize any website for speed by diving into the details of how mobile and desktop browsers render pages.
3. Great series of articels by A.Zalatof about how JS Works under the hood. [Link](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)
