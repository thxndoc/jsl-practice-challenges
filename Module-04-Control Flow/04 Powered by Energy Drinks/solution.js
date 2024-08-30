// Given data
const baseEnergyDrinks = 2;
const completedCodingExercises = 5;
const studyHours = 6;
const hasCaffeineTolerance = true; // Change to `true` or `false` as needed

// Calculate energy drinks earned based on conditions
let earnedEnergyDrinks = baseEnergyDrinks;

// Check if at least 3 coding exercises are completed
if (completedCodingExercises >= 3) {
    // Earn an additional energy drink
    earnedEnergyDrinks++;
}

// Check if more than 4 hours are spent studying
if (studyHours > 4) {
    // Earn an additional energy drink
    earnedEnergyDrinks++;
}

// Check if caffeine tolerance is true
if (hasCaffeineTolerance) {
    // Earn an extra 2 energy drinks
    earnedEnergyDrinks += 2;
}

// Display the total number of energy drinks earned
console.log(`Total energy drinks earned: ${earnedEnergyDrinks}`);