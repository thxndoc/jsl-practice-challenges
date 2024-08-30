// This code first uses a `for` loop to iterate through the `energyDrinks` array and increases the quantity of each drink by 50. Then, it uses another `for` loop with a `while` loop inside to decrease the quantity of each drink by 20 until it reaches a minimum of 50. Finally, it prints the updated inventory to the console.

// Array of energy drink objects
let energyDrinks = [
  { name: "SuperCharge", quantity: 100 },
  { name: "Electrolyte Blast", quantity: 50 },
  { name: "Revive", quantity: 75 }
];

// TODO: Implement a for loop to iterate through the energyDrinks array
for (let i = 0; i < energyDrinks.length; i++) {
  // Access each object as energyDrinks[i]
  
  // TODO: Increase the quantity of each drink by 50
  energyDrinks[i].quantity += 50;
}

// TODO: Use a while loop to decrease the quantity of each drink by 20 until it reaches a minimum of 50
for (let i = 0; i < energyDrinks.length; i++) {
  while (energyDrinks[i].quantity > 50) {
    energyDrinks[i].quantity -= 20;
  }
}

// Print the updated inventory
console.log(energyDrinks);


