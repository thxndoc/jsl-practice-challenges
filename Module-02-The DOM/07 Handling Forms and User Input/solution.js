// 🚨 Lesson 7: Handling Forms and User Input
// Function to handle weekly meal plan form submission

const submitMealPlan = (event) => {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
