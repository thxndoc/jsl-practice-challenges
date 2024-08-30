function displayDestination(country, dish, distance) {
  const cost = calculateJourneyCost(distance, 0.5);
  const specialMessage = specialDishMessage(dish);
  const message = `Exploring the taste of ${dish} in ${country}! ${specialMessage} Estimated cost: $${cost}.`;
  document.getElementById("journeyMessage").textContent = message;
}

function calculateJourneyCost(distance, costPerMile) {
  return distance * costPerMile;
}

const specialDishMessage = function(dish) {
  return dish === "Sushi" ? "A healthy choice!" : "An interesting selection!";
};

document.getElementById("journeyForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const country = document.getElementById("country").value;
  const dish = document.getElementById("dish").value;
  const distance = document.getElementById("distance").value;
  displayDestination(country, dish, distance);
});
