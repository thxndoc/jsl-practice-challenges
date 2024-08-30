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

// 🚨 Lesson 5: Advanced DOM Manipulation

// Hint 1: Create a function named 'updateProgressCharts' that will be responsible for updating the text content of workout and calorie intake progress elements on the page.

// Hint 2: Inside the 'updateProgressCharts' function, use 'document.querySelector()' to select the element that displays the workout progress. This element has an ID of 'workoutProgress'.

// Hint 3: Set the 'textContent' property of the workout progress element to a string that indicates the workout progress has been updated. For example, "Updated workout progress...".

// Hint 4: Repeat the process for the calorie intake progress. Use 'document.querySelector()' to select the element with an ID of 'calorieIntakeProgress'.

// Hint 5: Similarly, set the 'textContent' property of the calorie intake progress element to a string that reflects the update, such as "Updated calorie intake progress...".

// Hint 6: After defining the 'updateProgressCharts' function, call it to simulate the action of updating these progress charts. This call simulates the scenario where user data has been entered and the charts need to be updated to reflect the new data.

// Additional Info:
// - This lesson aims to teach how to manipulate the DOM to dynamically update the content of web pages.
// - The IDs 'workoutProgress' and 'calorieIntakeProgress' should correspond to elements within your HTML that are intended to display the user's workout and calorie intake progress, respectively.
// - Remember, this function is a mock-up for demonstration purposes. In a real application, you would likely update these elements based on actual data collected from user inputs or an external API.

