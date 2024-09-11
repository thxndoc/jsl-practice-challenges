// Function to display the chosen culinary destination, dish, and the estimated journey cost
function displayDestination(country, dish, distance) {
  // Calculate the journey cost using the calculateJourneyCost function
  // HINT: Pass the distance and a fixed cost per mile as arguments
  const cost = calculateJourneyCost(distance, 0.5);
  // Get a special message for the chosen dish using the specialDishMessage function
  // HINT: This checks if the dish is "Sushi" and returns a specific message
  const specialMessage = specialDishMessage(dish);
  // Construct the message to display to the user
  // HINT: Use template literals to include variables in the string
  const message = `Exploring the taste of ${dish} in ${country}! ${specialMessage} Estimated cost: $${cost}.`;
  // Display the message in the 'journeyMessage' paragraph
  // HINT: Use document.getElementById to find the paragraph by its ID and set its textContent property
  document.getElementById('journeyMessage').textcontent = message;
}

// Function to calculate the journey cost based on distance and cost per mile
// HINT: Simply multiply the distance by the cost per mile to get the total cost
function calculateJourneyCost(distance, costPerMile) {
  return distance * costPerMile;
}

// Function expression to return a special message based on the dish
// HINT: Use a ternary operator to check if the dish is "Sushi" and return the corresponding message
const specialDishMessage = function(dish) {
  dish === "Sushi" ? "A healthy choice!" : "An interesting selection!";
};

// Add an event listener to the form to handle the submit event
// HINT: Prevent the default form submission, get the values from the input fields, and call displayDestination
document.getElementById("journeyForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting in the traditional way
  // Retrieve values from the form inputs
  const country = document.getElementById('country').value; // Get the country input value
  const dish = document.getElementById('dish').value; // Get the dish input value
  const distance = document.getElementById('distance').value; // Get the distance input value

  // Call the displayDestination function with the form values as arguments
  displayDestination(country, dish, distance);
});
