# Session 13 Summary

## JS Hint of the Day

- `Object.entries` >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
- `for .. of` loop and `for..in` loop >> [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)
- Compining both

## Session Plan

1. Correcting the Error of last session
   1. `data.map` is not a function
   2. infinte loop of setState
   3. Adding empty book
   4. Controlled/Uncontrolled pattern
2. Adding the Delete Button
   1. Adding button UI to `BookCard`
   2. Adding clickListener to the button and send it proper data
   3. Reimplementing `Store.Remove` to accept `comparisonObject`
   4. Implementing handeling function in its right place! `deleteBook`
   5. Implementing `updateData` function that updates the `data` state of the BookCards controling Component after any store operation
   6. Test and Debug !
3. Edit the "adding new book" functionaliy so that it doesn't violate the uniqueness of `title,author` pairs
4. Connecting to an API using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) then [Axios](https://github.com/axios/axios)
   > [TASK] Using our API to retrieve, add and delete books
5. Recap of what we said so far
6. Announcing the new course schedule

## Application

1. Follow: Recreating BookList App
2. Adding Remove Button functionality
