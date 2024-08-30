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

// 🚨 Lesson 4: Event Handling
// Function to log daily water intake
let waterIntake = 0;

// Create a function called updateWaterIntake that takes a parameter 'change'.
// Inside the function, update the 'waterIntake' variable by adding 'change' to it.
// Update the text content of the element with id 'waterIntakeDisplay' to display the new water intake value along with a 💦 emoji.

// Add an event listener to the element with id 'increaseWater' that listens for a 'click' event and calls the updateWaterIntake function with a parameter of 1 when clicked.

// Add an event listener to the element with id 'decreaseWater' that listens for a 'click' event and calls the updateWaterIntake function with a parameter of -1 when clicked.
