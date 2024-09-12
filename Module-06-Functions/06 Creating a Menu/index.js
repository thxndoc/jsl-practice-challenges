// index.js
const dishes = [
    { name: "Caesar Salad", type: "starter" },
    { name: "Spaghetti Bolognese", type: "main" },
    { name: "Tiramisu", type: "dessert" },
    { name: "Chicken Parmesan", type: "main" },
    { name: "Cheesecake", type: "dessert" },
    { name: "Garlic Bread", type: "starter" }
];

document.getElementById("menu").innerHTML =
// TODO: Filter out only the dessert dishes
dishes
    .filter(dish => dish.type === "dessert")
    // TODO: Convert dessert names to uppercase
    .map(dessert => `<li>${dessert.name.toUpperCase()}</li>`)

// TODO: Display the dessert names in uppercase on the webpage
.join('');




