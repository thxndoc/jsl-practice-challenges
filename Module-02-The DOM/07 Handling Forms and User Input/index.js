// For this project, I'll outline a JavaScript file that builds up from lessons 1 to 8, focusing on creating a fitness tracker. Each section will be commented to show where new code was added for each lesson.

// Lesson 1: Introduction to the DOM
// Display a welcome message with the current date to the user
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// Lesson 2: Selecting and Manipulating Elements
// Function to display workout routines inputted by the user
const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

// Add event listener to the workout submit button
document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// Lesson 3: Creating and Removing Elements
// Function to add new fitness goals and remove completed ones
const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
    
    newGoal.addEventListener('click', () => {
        goalList.removeChild(newGoal);
    });
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

// Lesson 4: Event Handling
// Function to log daily water intake
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

// Lesson 5: Advanced DOM Manipulation
// Function to update weekly progress charts
// (For simplicity, we'll mock this function without implementing a full charting solution)
const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

// Assuming user enters data, this function would be called
updateProgressCharts();

// Lesson 6: CSS Manipulation via JavaScript
// Function to toggle light and dark mode
const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

// 🚨 Lesson 7: Handling Forms and User Input
// Create a function called 'submitMealPlan' that takes an 'event' as a parameter.
// Inside the function, prevent the default form submission behavior using 'event.preventDefault()'.
// Display an alert to the user with the message 'Meal plan submitted successfully! 🍴'.

// Add an event listener to the form element with id 'mealPlanForm' that listens for a 'submit' event and calls the 'submitMealPlan' function when the form is submitted.
