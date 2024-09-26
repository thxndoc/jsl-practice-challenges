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

**Step-by-step breakdown of the `if` statement:**<br>
1. `if (this.current <= this.last)`
    * The if statement checks whether the value of `this.current` is less than or equal to `this.last`.
    * `this.current` & `this.last` refers to the `current` & `last` properties inside the iterator object.
    * It checks: "Is the current value of `this.current` smaller than or equal to `this.last`?"

2. What if the iteration is `true`?
    * If this.current is 1, 2, 3, 4, or 5, then the condition `this.current <= 5` will be **true**.
    * When the condition is **true**, the code inside the curly braces `{}` runs.
    * Code inside the curly braces:
```JavaScript
return { value: this.count++, done: false };
```
This returns an object with the current value of `current` and increments `current` by 1 (because of `this.current++`), and it also sets `done` to `false` to indicate there are more values left.<br>

So, if `current = 1`, it returns `{ value: 1, done: false }` and then increases `current` to 2 for the next time.<br>

3. What if the condition is `false`?
