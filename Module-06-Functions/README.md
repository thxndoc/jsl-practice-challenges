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


## Arrow Functions (ES6)
Arrow functions are a concise way to write functions in JavaScript. Perfect for short functions and passing them as arguments.
```JavaScript
const packSuitcase = (item) => `Packing ${item} in the suitcase.`;
```


## Closures
 - Closures allow us to remember values.
 - Closures are a property of JavaScript functions
 - Call function in different scope than where function was original defined

 ```JavaScript
 function handleLikePost(step) {
  let likeCount = 0;
  return function addLike() {
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
