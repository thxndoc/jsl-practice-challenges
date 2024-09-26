// javascript
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

//You keep asking for the next item until there are no more
  console.log(customIterator.next())
  console.log(customIterator.next())
  console.log(customIterator.next())
  console.log(customIterator.next())
  console.log(customIterator.next())
  console.log(customIterator.next())

//Creating a Simple Generator Function
  function* fibonacciGenerator() {
    let [prev, curr] = [0, 1];
    while (true) { // Infinite loop
      yield curr;
      [prev, curr] = [curr, prev + curr]; // Update the values
    }
  }

//To use the generator, create an instance and call `next()` to get Fibonacci numbers:
const fib = fibonacciGenerator();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
// and so on
