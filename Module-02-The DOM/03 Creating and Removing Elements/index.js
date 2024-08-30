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

// Add an event listener to the element with id 'submitWorkout' that listens for a 'click' event and calls the 'displayWorkoutRoutine' function when clicked.

// 🚨 Lesson 3: Creating and Removing Elements
// Create a function called 'addNewGoal' that performs the following steps:
// 1. Get the value of the input element with id 'goalInput' and store it in the 'goalInput' variable.
// 2. Get a reference to the 'ul' element with id 'goalList' and store it in the 'goalList' variable.
// 3. Create a new list item element 'newGoal'.
// 4. Set the text content of 'newGoal' to the value of 'goalInput'.
// 5. Append 'newGoal' as a child to the 'goalList'.
// 6. Add an event listener to 'newGoal' that listens for a 'click' event and removes 'newGoal' from the 'goalList' when clicked.

// Add an event listener to the element with id 'submitGoal' that listens for a 'click' event and calls the 'addNewGoal' function when clicked.
