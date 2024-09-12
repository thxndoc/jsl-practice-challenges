// Function to simulate meal preparation
function prepareMeal(mealType) {
    const secretIngredient = "11 herbs and spices";

    // Your code here: Create a closure that captures the mealType and secretIngredient
    return function(sideDish) {
        // Your code here: Generate a message using mealType, sideDish, and secretIngredient
        const message = `Preparing a delicious ${mealType} with ${sideDish} and the secret ingredient: ${secretIngredient}.`; // Update this line
        document.getElementById("message").textContent = message;
    };
}

// Event listener for form submission
document.getElementById("mealForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const mealType = document.getElementById("mealType").value;
    const sideDish = document.getElementById("sideDish").value;
    const mealPrep = prepareMeal(mealType);
    // Your code here: Call the prepareMeal function and pass in the sideDish
    mealPrep(sideDish);
});

// Example of how to use the closure you've created:
// const dinnerPrep = prepareMeal("Dinner");
// dinnerPrep("mashed potatoes");