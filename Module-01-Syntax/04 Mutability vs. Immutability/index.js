// Starter Code with Hints

// Define two pet profiles as objects
let pet1 = { name: 'Buddy', age: 5, type: 'Dog' };
let pet2 = { name: 'Whiskers', age: 3, type: 'Cat' };

// Hint 1: Immutable Primitive Value Manipulation
// Attempt to change the pet's name using string manipulation
// Display how the original name remains unchanged, demonstrating immutability
let newName = /* Use string manipulation here to change pet1's name */;
console.log(`Trying to change name: ${newName}`);
console.log(`Original name: ${pet1.name}`); // Show immutability

// Hint 2: Mutable Object Reference Manipulation
// Update the age of one of the pets by directly modifying the property
// Create a new reference to one of the pet objects and modify its type
// Show how changes to one reference affect the original object, demonstrating mutability
pet1.age = /* Update age here */;
console.log(`Updated age: ${pet1.age}`);

let petReference = /* Create a reference to pet2 here */;
// Hint: Modify the type of petReference here

// Display final profiles
console.log("Final Pet Profiles:");
console.log(pet1);
console.log(pet2);
