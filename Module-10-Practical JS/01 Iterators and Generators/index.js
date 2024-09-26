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
  