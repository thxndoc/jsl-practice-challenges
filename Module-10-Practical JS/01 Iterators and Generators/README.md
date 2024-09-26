# Iterators & Generators
## Iterator
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
* `value`: The item you got (like a toy).
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
    * If `this.current` is greater than 5, then the condition `this.current <= 5` will be **false**.
    * In this case, the code inside the `else` block runs:
    ```JavaScript
    return { done: true };
    ```
    * This returns an object with just done: true, which signals that the iteration is over, and there are no more values to process.

**Example in action**<br>
* When `current = 1`, the condition `1 <= 5` is `true`, so it returns `{ value: 1, done: false }`.
* When `current = 6`, the condition `6 <= 5` is `false`, so it skips to the `else` block and returns `{ done: true }`, signaling that the iterator is finished.

**In summary:**<br>
* **If the current value (`current`) is less than or equal to 5:** It returns the current number and indicates that there are more values.
* **If the current value is greater than 5:** It returns `done: true`, signaling the end of the iteration.

## Generator
A JavaScript **generator** function is a special type of function that can pause and resume, allowing you to control when the function gives (or "yields") a value. It’s like having a magical box that gives you a new surprise every time you ask, instead of giving all the surprises at once.<br>

**Code example:**<br>
```JavaScript
function* fibonacciGenerator() {
  let [prev, curr] = [0, 1];
  while (true) { // Infinite loop
    yield curr;
    [prev, curr] = [curr, prev + curr]; // Update the values
  }
}
```
**Step-by-step example:**<br>
1. `function* fibonacciGenerator()`
    * This defines a **generator** function. The `*` symbol after `function` tells us it’s a generator. Generators don't run all at once; instead, they give values one by one when asked.

2. `let [prev, curr] = [0, 1];`
    * We’re setting up two variables, `prev` and `curr`, which will store numbers. Initially, `prev = 0` and `curr = 1`. These are the starting numbers for the Fibonacci sequence.

3. `while (true)`
    * This is an **infinite loop**, meaning it will keep running forever. In this case, it keeps generating Fibonacci numbers.

4. `yield curr;`
    * The word `yield` is like saying, "Here, take this value!"
    * The generator pauses after yielding `curr` (which is the current Fibonacci number). It will wait until we call `.next()` to continue and give the next number.


5. `[prev, curr] = [curr, prev + curr];`
    * This updates the values of `prev` and `curr` to the next two Fibonacci numbers.
    * `prev` becomes the old `curr`, and `curr` becomes the sum of the old `prev` and `curr`. This is how Fibonacci numbers work — each number is the sum of the two before it.

6. **Calling the generator** (`const fib = fibonacciGenerator()`)
    * `fib` is now an instance of the generator.
    * Every time we call `fib.next()`, the generator gives us the next Fibonacci number.

**Using the generator:**<br>
```JavaScript
console.log(fib.next().value); // 1 (first Fibonacci number)
console.log(fib.next().value); // 1 (second Fibonacci number)
console.log(fib.next().value); // 2 (third Fibonacci number)
```
**Summary**<br>
* **Generator function:** A special function that gives values one at a time using `yield`.
* **Fibonacci sequence:** Each number is the sum of the two before it (1, 1, 2, 3, 5, 8, etc.).
* **How it works:** Every time you call `.next()`, the generator pauses, updates the Fibonacci numbers, and gives you the next number in the sequence.

You can keep calling `.next()` to get as many Fibonacci numbers as you want💁🏽‍♀️<br>
