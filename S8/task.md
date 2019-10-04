# Session 8 Task

1. Solve Quizzes in all the lessons of [js.info Forms, controls](http://javascript.info/forms-controls)
2. Make a form with the following data fields and constraints.

    ```
    {
         "applicantname": "Ebrahim Gomaa", >>> String, cannot be null
         "phonenumber": "01001634099", >>> String, cannot be null
         "email": "ebrahim.gomaa.hg@gmail.com", >>> String, cannot be null
         "facebooklink": "https://www.facebook.com/hmana6399fswd", >>> String, cannot be null
         "university": "Cairo", >>> String (select), cannot be null
         "faculty": "Engineering", >>> String, cannot be null
         "department": "Computer", >>> String, can be null (containing others option which opens a textbox for another user input)
         "schoolname": "", >>> String, can be null
         "schoolsystem": "", >>> String, can be null
         "practicedbefore": "Yes", >>> String (Yes|No), cannot be null
         "previousworkshop": "Electronics", >>> String, can be null
         "reason": "Extend knowledge", >>> String, cannot be null
         "comments": "Keep moving forward" >>> String, can be null
     }
    ```

    and on submit, console.log the data entered by the user
