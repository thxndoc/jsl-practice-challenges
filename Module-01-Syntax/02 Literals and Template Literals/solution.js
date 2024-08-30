
// Solution Code

// Pet Profile using Standard String Literals
let petProfile1 = 'Pet Name: ' + petName + ', Age: ' + petAge + ', Type: ' + petType + ', Favorite Toy: ' + favoriteToy;
console.log("Standard String Literal:\n" + petProfile1);

// Pet Profile using Template Literals
let petProfile2 = `
Pet Name: ${petName}
Age: ${petAge}
Type: ${petType}
Favorite Toy: ${favoriteToy}
`;
console.log("Template Literal:\n" + petProfile2);

// Bonus
let petHobbies = 'Running and Jumping';
let petFavoriteFood = 'Chicken';
let petProfileBonus = `
Pet Name: ${petName}
Age: ${petAge}
Type: ${petType}
Favorite Toy: ${favoriteToy}
Hobbies: ${petHobbies}
Favorite Food: ${petFavoriteFood}
`;
console.log("Bonus Template Literal:\n" + petProfileBonus);
