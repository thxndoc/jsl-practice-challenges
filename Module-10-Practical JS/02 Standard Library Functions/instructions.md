#### Practical Exercises

##### Explore and Use Various Standard Library Functions
1. **Math and Array Functions**: Write a function that takes an array of numbers as input, uses `Math.max()` to find the highest number, and then returns the square of this number using `Math.pow()`.
   
Example:
```javascript
function findMaxSquare(numbers) {
  const maxNum = Math.max(...numbers);
  return Math.pow(maxNum, 2);
}
```

2. **String and Date Functions**: Write a function that formats the current date as a string in the format `DD-MM-YYYY`.

Example:
```javascript
function formatDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();
  return day + '-' + month + '-' + year;
}
```

3. **JSON Functions**: Write a script that converts a JSON string representing an object into an actual JavaScript object, modifies one of its properties, and then converts it back to a JSON string.

Example:
```javascript
function modifyJSON(jsonString) {
  let obj = JSON.parse(jsonString);
  obj.modified = true; // Modify or add a new property
  return JSON.stringify(obj);
}
```

These exercises are designed to provide you with practical experience using different aspects of the JavaScript Standard Library, illustrating its utility and versatility in solving common programming challenges.