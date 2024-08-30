// Define the time of day and the user's current energy level
let timeOfDay = "morning"; // Possible values: "morning", "afternoon", "evening"
let userEnergyLevel = 40; // Adjust this value based on the user's energy

// Check if it's morning and the user's energy level is below 50
if (timeOfDay === "morning" && userEnergyLevel < 50) {
  // TODO: Log a message recommending the Sunrise Blast for morning energy
  console.log("Try our Sunrise Blast. It's perfect to kickstart your day!");
} 
// Check if it's the afternoon and the user's energy level is below 50
else if (timeOfDay === "afternoon" && userEnergyLevel < 50) {
  // TODO: Log a message recommending the Midday Surge for an afternoon energy boost
  console.log("Grab a Midday Surge. It'll help you overcome the afternoon slump.");
} 
// If it's neither morning nor the user's energy is above 50
else {
  // TODO: Log a message recommending the Evening Refresh for relaxation
  console.log("Evening Refresh is what you need to relax and recharge.");
}

// Hints for completing the TODOs:
// 1. Use console.log() to output the recommendation messages.
// 2. Adjust the conditions to match different times of the day and energy levels.
// 3. Try changing the values of timeOfDay and userEnergyLevel to test different outcomes.
