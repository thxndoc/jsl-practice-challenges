#### Practical Exercises

##### Creating and Testing Regular Expressions for Validation
1. Create a regular expression to validate an email address. Test it with a few example strings to verify it works as expected.

Example regex for email validation:
```javascript
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
console.log(emailRegex.test("example@example.com")); // Should return true
console.log(emailRegex.test("invalid-email")); // Should return false
```

##### Searching and Replacing Text Using Regular Expressions
2. Write a script that searches for all occurrences of the word "JavaScript" (case-insensitive) in a text and replaces them with "JS".

Example:
```javascript
const text = "JavaScript is often abbreviated as JavaScript.";
const regex = /JavaScript/gi; // 'g' for global search, 'i' for case-insensitive
const newText = text.replace(regex, "JS");
console.log(newText); // Output: "JS is often abbreviated as JS."
```

Through these exercises, you'll become familiar with creating and applying regular expressions to solve common problems related to string handling, enhancing your ability to perform sophisticated text manipulation tasks.