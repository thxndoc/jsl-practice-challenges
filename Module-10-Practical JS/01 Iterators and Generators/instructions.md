#### Practical Exercises

##### Implementing a Custom Iterator
Create a custom iterator for an object that iterates over the numbers 1 to 5. Use the iterator protocol as a guide. Your object should have a `next()` method that returns the next number in the sequence until it reaches 5. After that, `next()` should return an object indicating that the iteration is complete.

Example code structure:
```javascript
const customIterator = {
  // Current state of the iteration
  current: 1,
  last: 5,

  // Implementation of the next() method
  next() {
    // Check if the current state is beyond the last number
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { done: true };
    }
  }
};
```

##### Creating a Simple Generator Function
Write a generator function that generates an infinite sequence of Fibonacci numbers. The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.

Example generator function:
```javascript
function* fibonacciGenerator() {
  let [prev, curr] = [0, 1];
  while (true) { // Infinite loop
    yield curr;
    [prev, curr] = [curr, prev + curr]; // Update the values
  }
}
```

To use the generator, create an instance and call `next()` to get Fibonacci numbers:
```javascript
const fib = fibonacciGenerator();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
// and so on
```

These exercises will give you hands-on experience with iterators and generators, helping you understand their implementation and use cases in JavaScript.