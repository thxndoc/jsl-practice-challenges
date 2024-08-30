For use in the browser version of the Scrimba IDE, which does not support ES6 modules via separate files in the same way a traditional development environment does, we can adapt the exercise to simulate module behavior within a single JavaScript file. This approach allows students to understand the concept of modules and promises without needing file separation.

### Adapted Practical Exercise: Asynchronous Data Display without Separate Modules

**Objective**: Create a simple application that simulates fetching data about X-Men characters asynchronously and displays the information, emphasizing promises and functional organization within a single file.

#### Setup
Since we can't use separate files for modules in this environment, we will define everything in `index.js` and simulate module behavior by separating concerns within the file.

#### JavaScript (`index.js`)
```javascript
// Simulate the fetchData function from a module
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Wolverine", "Magneto", "Professor X"]), 1000);
  });
};

// Use the fetchData function to display data
fetchData().then((xMen) => {
  const content = document.getElementById('content');
  xMen.forEach((hero) => {
    const element = document.createElement('p');
    element.textContent = hero;
    content.appendChild(element);
  });
});
```

#### HTML
In your HTML file, you only need a `div` to hold the character list and a script tag to include your JavaScript code. Since everything is contained within a single JavaScript file, there's no need for `import` or `export` statements.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>X-Men Characters</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <div id="content"></div>
    <script src="index.js"></script>
</body>
</html>
```

#### Explanation
This exercise demonstrates how to manage asynchronous operations with promises in JavaScript. By organizing the code in a way that simulates modules (even within a single file), students can understand how to structure their code effectively, separating the data-fetching logic from the data-display logic. This pattern is crucial for managing larger applications and can be directly applied when working with actual modules in a development environment that supports ES6+ features.

#### Note
This adaptation is specifically designed for environments like Scrimba's IDE, where traditional module support might not be available. When working in a standard development environment, separating concerns into different files and using ES6 modules is the recommended approach for better code organization and maintainability.

## Challenge Yourself
Check out the VSCode Challenge.md file in the file explorer to the left. Run through the instructions to replicate this challenge with ES6 Modules 🚀