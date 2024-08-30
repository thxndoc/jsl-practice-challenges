// For this project, I'll outline a JavaScript file that builds up from lessons 1 to 8, focusing on creating a fitness tracker. Each section will be commented to show where new code was added for each lesson.

// Lesson 1: Introduction to the DOM
// Display a welcome message with the current date to the user
const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

// 🚨 Lesson 2: Selecting and Manipulating Elements
// Create a function called 'displayWorkoutRoutine' that performs the following steps:
// 1. Get the value of the input element with id 'workoutInput' and store it in the 'workoutInput' variable.
// 2. Get a reference to the 'ul' element with id 'workoutList' and store it in the 'workoutList' variable.
// 3. Create a new list item element 'newWorkout'.
// 4. Set the text content of 'newWorkout' to the value of 'workoutInput'.
// 5. Append 'newWorkout' as a child to the 'workoutList'.

// Add an event listener to the element with id 'submitWorkout' that listens for a 'click' event and calls the 'displayWorkoutRoutine' function when clicked.
