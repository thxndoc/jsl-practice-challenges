// Define pet profiles
let pet1 = { name: 'Buddy', age: 5, type: 'Dog' };
let pet2 = { name: 'Whiskers', age: 3, type: 'Cat' };

// Immutable Primitive Value Manipulation
let newName = pet1.name.toUpperCase();
console.log(`Trying to change name: ${newName}`);
console.log(`Original name: ${pet1.name}`); // Show immutability

// Mutable Object Reference Manipulation
pet1.age = 6; // Update age
console.log(`Updated age: ${pet1.age}`);

let petReference = pet2;
petReference.type = 'Parrot'; // Change type through reference
console.log(`Updated type through reference: ${pet2.type}`); // Reflects in original object

// Display final profiles
console.log("Final Pet Profiles:");
console.log(pet1);
console.log(pet2);