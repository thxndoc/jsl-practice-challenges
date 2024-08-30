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

// 🚨 Lesson 6: CSS Manipulation via JavaScript

// Hint 1: Define a function named 'toggleTheme' that doesn't take any parameters.

    // Hint 2: Use 'document.body.classList.toggle()' method to add or remove the 'dark-theme' class from the <body> element.
    // This will switch between light and dark mode based on whether 'dark-theme' class is present.
 


// Hint 3: Select the theme toggle button using 'document.querySelector()' by targeting its ID 'themeToggle'.
// Hint 4: Add an 'click' event listener to the theme toggle button.
// When the button is clicked, the 'toggleTheme' function will be called, applying the theme change.


// Additional Info:
// - The 'dark-theme' class should be defined in your CSS with the desired styles for dark mode.
// - Ensure your HTML has a button with id='themeToggle' for this script to work.


