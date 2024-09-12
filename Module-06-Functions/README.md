# Functions
- To make a function reusable, it needs parameters.

## Types of functions
```JavaScript
//Function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
} //hoisting works here

//Anonymous function/Function expression
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}
//Arrow function
const dinnerMenu = (food) => `I'm going to eat a ${food} for dinner`; //hoisting does not work on arrow functions

console.log( dinnerMenu("burger") );
```

## Parameters
Parameters define what a function expects to receive(placeholder), while arguments are the actual values given to the function when it's called.
```JavaScript
// Function definition with two parameters: 'name' and 'age'
function introduceUser(name, age) {
    console.log(`Hello, my name is ${name} and I'm ${age} years old.`);
}

// Function call with two arguments: "Thando" and 28
introduceUser("Thando", 28);
```

In this example:
The function **introduceUser** is defined with two parameters: name and age.
When we call the function, we pass two arguments: "Emily" and 28.
The argument "Emily" is assigned to the parameter name, and 28 is assigned to age.
The function then uses these values to create and log the introduction message.

So a parameter is as if you're setting a variable and waiting for a value, and the value would be the argument. E.g declaring function = functionName(input)...calling the function = functionName('hello')

The first argument will always be passed to the first parameter and the second argument will always be passed to the second parameter(They need to correspond). If there is 1 parameter, and you pass 2 arguments, JS will show the first argument only and ignore the second because there is not second corresponding parameter.


## Naming a function
**Start with a verb:** Since functions do something, it's a good practice to start their names with a verb and make sure the name is **descriptive.**
```JavaScript
function visitNewCountry() { ... }
```
```JavaScript
// create a todo
function createTodo() {}
// update a todo
function updateTodo() {}
// check off todo
function checkCompleteTodo() {}
// delete todo
function deleteTodo() {}
// getting a todo
function getTodo() {}
// getting user
function getUser() {}
```

## Arrow Functions (ES6)
Arrow functions are a concise way to write functions in JavaScript. Perfect for short functions and passing them as arguments.
  - Anything after the arrow is the body of the function.
  - If you have 1 parameter, there is no need for brackets: add brackets for 2 or more parameters.
  - No need for **return** keyword in arrrow function because return is implicit.
```JavaScript
const packSuitcase = (item) => `Packing ${item} in the suitcase.`;
```


## Closures
 - Closures allow us to remember values, helping you keep track of data over time.
 - Closures are a property of JavaScript functions
 - Call function in different scope than where function was original defined

 ```JavaScript
 function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() { //This function does all the work
    likeCount += step;    
    return likeCount;
  }

  console.log('like count:', likeCount);
}

const doubleLike = handleLikePost(2);

console.log(doubleLike());
console.log(doubleLike());
console.log(doubleLike());
 ```

 An example of dynamically counting down from a certain number using a closure:
 ```JavaScript
function countdown(startingNumber, step) {
  let countFromNum = startingNumber + step;
  return function decrease() { //This function does all the work
    countFromNum -= step;
    return countFromNum;
  }
}

const countingDown = countdown(20, 5);

console.log(countingDown());
console.log(countingDown());
console.log(countingDown());
```


## Default Parameters

```JavaScript
function convertTemperature(celsius, decimalPlaces = 1) {
    // celsius to fahrenheit
    //decimalPlaces = decimalPlaces || 1;
  const fahrenheit = celsius * 1.8 + 32;
  return Number(fahrenheit.toFixed(decimalPlaces));
}

console.log(convertTemperature(21, 0));
```


## Anonymous functions
- You can only use an anonymous function once


## Function expression
- The function keyword can be used to define a function inside an expression.
- You are making the variable a function (same as 1 = 1)

```JavaScript
const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// Expected output: 12
```