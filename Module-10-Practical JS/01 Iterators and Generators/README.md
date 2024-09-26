# Iterators & Generators
A JavaScript iterator is like a "counter" that goes through a list of items one by one. Imagine you have a box with 5 toys. The iterator helps you take one toy at a time from the box, look at it, and then tell you if there are more toys left.<br>

**In simple terms:**<br>
* **Iterator:** A helper that keeps track of what item comes next.
* `next()` **method**: It gives you the next item and says if there are more items left or not.
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
* `value``: The item you got (like a toy).
* `done`: Tells if you’ve gone through all the items.

**See the js file for an example**<br>

In this iterator, the if statement helps decide what happens each time we call the next() method.<br>

