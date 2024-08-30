// 🚨 Lesson 2: Selecting and Manipulating Elements
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

