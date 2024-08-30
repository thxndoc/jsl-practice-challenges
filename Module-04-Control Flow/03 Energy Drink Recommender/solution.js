let timeOfDay = "morning"; // Try changing this to "afternoon" or "evening"
let userEnergyLevel = 40; // Try adjusting this value

if (timeOfDay === "morning" && userEnergyLevel < 50) {
  console.log("Try our Sunrise Blast. It's perfect to kickstart your day!");
} else if (timeOfDay === "afternoon" && userEnergyLevel < 50) {
  console.log("Grab a Midday Surge. It'll help you overcome the afternoon slump.");
} else {
  console.log("Evening Refresh is what you need to relax and recharge.");
}