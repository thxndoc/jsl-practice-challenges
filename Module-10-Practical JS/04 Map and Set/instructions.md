#### Practical Exercises

##### Implementing a `Set` for a Unique Collection of Items
Create a `Set` to store a collection of book titles. Ensure that attempting to add a duplicate book title has no effect.

Example:
```javascript
let books = new Set();
books.add("The Great Gatsby");
books.add("To Kill a Mockingbird");
books.add("The Catcher in the Rye");
// Attempt to add a duplicate
books.add("The Great Gatsby");

console.log(books.size); // Output should be 3, not 4
```

##### Using a `Map` for Complex Data Storage
Use a `Map` to store user profiles where each profile is accessed via a unique ID. Each profile should contain the user's name and email address.

Example:
```javascript
let userProfiles = new Map();

// Add user profiles
userProfiles.set(1, { name: "John Doe", email: "john@example.com" });
userProfiles.set(2, { name: "Jane Doe", email: "jane@example.com" });

// Retrieve and log a user profile
console.log(userProfiles.get(1)); // Output: { name: "John Doe", email: "john@example.com" }
```

These exercises will help you grasp the utility of `Set` and `Map` in managing collections efficiently, highlighting their advantages over traditional arrays and objects for certain tasks.