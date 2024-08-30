#### Practical Exercises

##### Serializing Objects to JSON and Parsing JSON Strings
1. Write a JavaScript function that takes an object with nested objects and arrays, serializes it into a JSON string, and then parses the string back into an object.

Example:
```javascript
function serializeAndParse(obj) {
  const jsonString = JSON.stringify(obj);
  console.log(jsonString); // Serialized JSON string
  const parsedObj = JSON.parse(jsonString);
  console.log(parsedObj); // Parsed object
  return parsedObj;
}
```

##### Debugging JavaScript Code Using Console API Methods
2. Use various Console API methods to debug the following code snippet. Identify potential issues by logging variables at different stages and grouping related logs.

Code snippet for debugging:
```javascript
function calculateSum(arr) {
  console.group('calculateSum');
  console.log('Input array:', arr);
  if (!Array.isArray(arr)) {
    console.error('Input is not an array');
    console.groupEnd();
    return;
  }
  let sum = 0;
  arr.forEach((num, index) => {
    console.assert(typeof num === 'number', `Element at index ${index} is not a number`);
    sum += num;
  });
  console.log('Sum:', sum);
  console.groupEnd();
  return sum;
}
```

Through these exercises, you'll deepen your understanding of JSON for data interchange and enhance your debugging skills using the Console API, essential competencies for any JavaScript developer.