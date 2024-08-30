#### Practical Exercises

##### Working with the Date Object
1. Create a function that returns the current month as a string, correctly handling the zero-based index. For example, January should be returned as `1`.

##### Regular Expressions Challenge
2. Write a regular expression that matches email addresses within a text and use it to find all matches in a given string.

##### Exploring `NaN` and `Infinity`
3. Experiment with operations that result in `NaN` and `Infinity` to understand their behavior. For example, divide by zero to get `Infinity` or parse a non-numeric string to a number to get `NaN`.

##### Mastering `this` in Different Contexts
4. Create examples where `this` refers to different objects depending on the context:
    - In the global scope.
    - Inside a function.
    - Inside an object method.
    - In an event handler.

Example code for `this` inside an object method:
```javascript
const person = {
  name: 'Alex',
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
};
person.greet(); // "Hello, my name is Alex"
```

Understanding these tricky objects and mastering their nuances will significantly improve your JavaScript coding skills, allowing you to write more robust and error-free code.