
#### Practical Exercise: Adding Daily Workouts

1. **HTML Setup**: Ensure you have an input field for workouts and a container to display them:
   ```html
   <input id="workout-input" placeholder="Add your workout" />
   <button id="add-workout">Add Workout</button>
   <div id="workout-list"></div>
   ```

2. **Adding a Workout**:
   - Use `querySelector` to select the input field and button.
   - Add an event listener to the button to capture the click event.
   - When clicked, retrieve the input value and append it to the "workout-list" div.

```javascript
const workoutInput = document.querySelector('#workout-input');
const addButton = document.querySelector('#add-workout');
const workoutList = document.querySelector('#workout-list');

addButton.addEventListener('click', function() {
    const workout = workoutInput.value;
    if (workout) {
        const listItem = document.createElement('div');
        listItem.textContent = workout;
        workoutList.appendChild(listItem);
        workoutInput.value = ''; // Clear input field
    }
});
```

This script captures user input, adds it to a list of workouts, and then clears the input field for the next entry. It's a practical example of how selecting and manipulating DOM elements can create interactive and user-friendly web applications.

You've now learned how to select elements from the DOM and manipulate them to dynamically change your web pages. These skills are fundamental to developing interactive web applications, allowing you to respond to user inputs and update the page accordingly. As you continue with the course, you'll build on these foundations to create even more complex and engaging user experiences.