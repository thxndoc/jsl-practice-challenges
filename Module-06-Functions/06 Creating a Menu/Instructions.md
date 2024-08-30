### Practice Challenge: Creating a Menu

#### Challenge Overview

In this challenge, you're given the role of a chef tasked with preparing a special menu for your restaurant. Your menu consists of an array of dishes, each with a unique name and categorized by type (starter, main, dessert). Your challenge is to use JavaScript's built-in functions to sift through these dishes, specifically focusing on the dessert category. The goal is to display the names of all dessert dishes in uppercase, demonstrating your ability to chain functions effectively.

#### Challenge Instructions

1. **Filter Desserts**: Use the `filter` method to create a new array containing only the dessert dishes from the provided array.
2. **Convert to Uppercase**: Transform the names of these desserts to uppercase using the `map` method.
3. **Display Desserts**: Display the resulting array of uppercase dessert names on the webpage using DOM manipulation.

#### Guided Instructions & Hints

1. **Filter Desserts**: Use the `filter` method on the `dishes` array to select only those dishes where the `type` is `"dessert"`. Remember, `filter` returns a new array based on the condition provided in its callback function.

```javascript
const desserts = dishes.filter(dish => dish.type === "dessert");
```

2. **Convert to Uppercase**: Chain the `map` method after your `filter` method to transform each dessert name to uppercase. The `map` method applies a function to each element in the array and returns a new array with the transformed elements.

```javascript
const uppercaseDesserts = desserts.map(dessert => dessert.name.toUpperCase());
```

3. **Display Desserts**: Use DOM manipulation to display the list of desserts in the `#menu` div. You can use `document.getElementById` to select the div and then update its `innerHTML` with the dessert names. Consider using `join` to convert the array of names into a single string with HTML list tags.

```javascript
document.getElementById("menu").innerHTML = uppercaseDesserts.join('<br>');
```

#### Solution Code

```javascript
// Complete solution with chaining
document.getElementById("menu").innerHTML = dishes
    .filter(dish => dish.type === "dessert")
    .map(dessert => `<li>${dessert.name.toUpperCase()}</li>`)
    .join('');

// This solution demonstrates filtering desserts, converting their names to uppercase, and displaying them using DOM manipulation, all in a concise and readable manner.
```

This challenge integrates JavaScript array methods and DOM manipulation to dynamically generate content based on data, simulating a real-world scenario where such techniques are valuable.