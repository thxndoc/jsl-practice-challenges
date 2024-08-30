const dishes = [
    { name: "Caesar Salad", type: "starter" },
    { name: "Spaghetti Bolognese", type: "main" },
    { name: "Tiramisu", type: "dessert" },
    { name: "Chicken Parmesan", type: "main" },
    { name: "Cheesecake", type: "dessert" },
    { name: "Garlic Bread", type: "starter" },
    { name: "Caprese Salad", type: "starter" },
    { name: "Lobster Bisque", type: "starter" },
    { name: "Filet Mignon", type: "main" },
    { name: "Chocolate Fondue", type: "dessert" },
    { name: "Vegetable Curry", type: "main" }
];

// Select the HTML element with the id "menu" and set its inner HTML content.

document.getElementById("menu").innerHTML =

    // Start by filtering the 'dishes' array to only include items of type "dessert".
    // The .filter() method creates a new array containing only items that meet the specified condition.

    dishes
        .filter(dish => dish.type === "dessert")

        // Now, we have an array of dessert objects.

        // Use the .map() method to transform each dessert object into a string with the dessert name in uppercase.
        // The .map() method iterates through the array and applies the specified function to each item.

        .map(dessert => `<li>${dessert.name.toUpperCase()}</li>`)

        // Now, we have an array of strings, each representing a dessert name in uppercase.

        // Join all the strings in the array into a single string with no separators.
        // The .join('') method combines the array elements into one string.

        .join('');

    // Finally, the inner HTML of the "menu" element is set to the resulting string, 
    // which contains a list of dessert names in uppercase, ready to be displayed.
