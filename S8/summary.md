# Session 8 Summary

__JS Hint of the Day__ : `setTimeOut` and `setInterval`

__Error in the last session__ : `Event.target` returns the really clicked element not the one to which the `addEventHandler` was added. `Event.currentTarget` does so. This is called Event Delegation 

1. Working with forms >>> [js.info](http://javascript.info/form-elements)
    1. Ease of access and manipulation in DOM
       1. `document.forms`
       2. `form.elements[name]` and `element.form`
       3. `form.name`
       4. `RadioNodeList.value` for the chosen radio button of the radio vuttons with the same `name` attribute.
       5. `input.value`, `textarea.value` not `textarea.innerHTML`
       6. `select.options`, `select.value`, `select.selectedIndex` and `option.selected`, `option.index`, `option.text`
       1. Multiple select
       2. ```javascript
          option = new Option(text, value, defaultSelected, selected);

    2. Validation >>> [__MDN__](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Form_validation)
       1. Using HTML5
          1. `:valid` and `:invalid` for styling
          2. `type="email"`, `type="number"` etc..
          3. `required`
          4. `pattern`
          5. `minlength`, `maxlength`
        2. Using Javascript 
            1. Form `novalidate` to disable browser default validation
            2. `focus/blur` events and the funny `tabindex` >>> [js.info](http://javascript.info/focus-blur)
            3. `change` and `input` >>> [js.info](http://javascript.info/events-change-input)
            4. Detecting Required Fields
            5. Adding Error message
            6.  Fast intro to RegEx
            7.  Testing text against RegEx using  `RegEx.test()`
     3. Submittion
        1. `submit` event
        2. Triggering the `submit` event using the `form.submit()` method
        3. Using `fetch` API. to get data from an API >>> [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
     4. Modal Form >>> [js.info ex.](http://javascript.info/forms-submit#modal-form)
2. localStorage
3. OOP