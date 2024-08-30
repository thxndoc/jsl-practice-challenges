### Practice Challenge: Pet Type Detector

#### Objective
Create an interactive web application to detect and display the data type of pet information, illustrating type conversion, type checking, and type coercion in JavaScript.

#### TypeOf by MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
https://www.geeksforgeeks.org/javascript-typeof-operator/

#### Instructions

1. **JavaScript Interaction**:
   - Write a JavaScript function that triggers on form submission.
   - Retrieve the input value and the selected data type from the form.
   - Perform type checking on the input value using `typeof` and display the original type.
   - Convert the input value to the selected data type using explicit conversion functions (`String()`, `Number()`, `Boolean()`).
   - Display the converted value and its new type.
   - Handle special cases like `NaN` and falsy values, and explain them in comments.

2. **Display Results**:
   - Show the original data type, the converted value, and the new data type in a designated area on the webpage.

3. **Comments and Explanation**:
   - Add comments in your JavaScript code explaining type coercion, type checking, and type conversion as demonstrated in your code.

#### Solution Code
The solution will be similar to the starter code. The key aspect is to demonstrate how JavaScript handles different types of data and how explicit and implicit conversions work. The solution should also illustrate how the `typeof` operator is used to check the data type.

#### Expected Outcome
- The expected outcome of the provided JavaScript code is to create a function that allows users to input a value and select a data type from a dropdown menu. 
- Upon submitting the form, the code will prevent the page from refreshing, check the original type of the input value using `typeof`, convert the input value to the selected data type using explicit conversion functions (`String()`, `Number()`, or `Boolean()`), and display both the original and converted values along with their respective types in a 'result' div on the webpage. 
- This functionality will help users understand how data types can be manipulated in JavaScript and observe the effects of type conversions.
