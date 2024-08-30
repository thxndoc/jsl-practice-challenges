# Create this challenge in VSCode

To adapt the provided challenge for running in Visual Studio Code (VSCode) with ES6 modules, we can organize the code into separate modules and utilize ES6 import/export statements. Here's the guide and code for the adapted challenge:

### Adapted Practical Exercise: Asynchronous Data Display with ES6 Modules

**Objective**: Create a simple application that simulates fetching data about X-Men characters asynchronously and displays the information, emphasizing promises and functional organization using ES6 modules.

#### File Structure
1. Create a project folder with the following structure:

```
project-folder/
│   index.html
│   index.js
│   fetchData.js
│   index.css
```

#### `fetchData.js` (Module for Data Fetching)
```javascript
// fetchData.js
export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["Wolverine", "Magneto", "Professor X", "Jean Grey", "Rogue"]), 1000);
  });
};
```

#### `index.js` (Main Module)
```javascript
// index.js
import { fetchData } from './fetchData.js';

fetchData().then((xMen) => {
  const content = document.getElementById('content');
  xMen.forEach((hero) => {
    const element = document.createElement('p');
    element.textContent = hero;
    content.appendChild(element);
  });
});
```

#### `index.html`
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
    <script type="module" src="index.js"></script>
</body>
</html>
```

#### `index.css` (Styling - Same as the provided CSS)
```css
/* CSS code remains the same as the provided CSS */
```

### Explanation
In this adaptation, we've organized the code into separate modules (`fetchData.js` for data fetching and `index.js` as the main module) using ES6 import and export statements. This allows for better code organization and maintainability, making it suitable for a standard development environment like Visual Studio Code with ES6 module support.

Make sure to create the project folder and files as described, and link the CSS file in the HTML's `<head>` section to apply the provided X-Men-themed styles. Finally, use the `<script type="module">` tag to import the main module (`index.js`) in the HTML file.
