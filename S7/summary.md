# Session 7 Summary
in this session we covered

1. __JS Hint of the day__ : Destructuring  >>> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

2. Intro to the Env. Specs in JS
    1. `Window` object, revisited !
    2. `DOM as document`, `BOM as navigator` and `CSSOM`
    3. `DOM Tree`
        1. Building `Nodes` for Everything
        2. `Node` vs `Element`
        3. [Live Dom Viewer](http://software.hixie.ch/utilities/js/live-dom-viewer/)
3. Browser Rendering / DOM Creation:
    - [How a web browser builds and displays a web page - Youtube](https://www.youtube.com/watch?v=DuSURHrZG6I)
    - [How Web Browsers Function - Youtube](https://www.youtube.com/watch?v=z0HN-fG6oT4)
    - Browser Rendering Optimization - Udacity:
      - [Course](https://classroom.udacity.com/courses/ud860)
      - [Read](https://james-priest.github.io/udacity-nanodegree-mws/course-notes/browser-rendering-optimization.html)
    - [Website Performance optimization - Udacity](https://www.udacity.com/course/website-performance-optimization--ud884)

3. JS Events
    1. What's an `event`, `eventListener`, `eventHandler` ?
    2. Listeners can be :-
        1. Attrributes
            ```html
            <button onclick="clickHandler()"></button>
            ```
        2. Explicit functions in JS
            ```javascript        
            var button = document.querySelector("#mybutton");
            button.onclick(clickHandler)  
            ```
        3. Parameters in the `addEventListener()` function
            ```javascript        
            var button = document.querySelector("#mybutton");
            button.addEventListener('click', clickHandler);  
            ```
        4. `event` parameter
        5. `removeEventListener()`
        6. Bubbling and capturing >>> [js.info](http://javascript.info/bubbling-and-capturing)

4. Manipulating DOM Using JS
    1. Creating Elements using `document.createElement()`
    2. Inserting Nodes :
        1. `node.append(...nodes or strings)` – append `nodes` or `strings` at the end of `node`,
        2. `node.prepend(...nodes or strings)` – insert `nodes` or `strings` into the beginning of `node`,
        3. `node.after(...nodes or strings)` –- insert `nodes` or `strings` after the node,

        4. `node.replaceWith(...nodes or strings)` –- replaces node with the given `nodes` or `strings`.

    3. Removing nodes using `node.remove()`
    4. Solving the tasks specified here http://javascript.info/modifying-document !
    
    3. Traversing the DOM
        1. For all nodes: `parentNode`, `childNodes`, `firstChild`, `lastChild`, `previousSibling`, `nextSibling`.
        2. For element nodes only: `parentElement`, `children`, `firstElementChild`, `lastElementChild`, `previousElementSibling`, `nextElementSibling`.
        3. Some types of DOM elements, e.g. tables, forms provide additional properties and collections to access their content.
        4. Solving these tasks http://javascript.info/dom-navigation