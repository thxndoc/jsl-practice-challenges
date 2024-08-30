#### Practical Exercise: Fitness Goals Management
For this exercise, you'll implement a feature that allows users to add new fitness goals and remove ones they've completed. This will involve creating a simple form for input and a list to display the goals.

1. **HTML Setup**:
   - Create a form for inputting new goals and a button for submission.
   - Prepare an unordered list (`<ul>`) to display the goals.

2. **Add New Goals**:
   - Capture the form submission event to gather the input value.
   - Create a new list item (`<li>`) for the goal and append it to the list.

3. **Remove Completed Goals**:
   - Add a "Remove" button next to each goal.
   - Attach an event listener to each button to handle the removal of the associated goal.

```html
<form id="goal-form">
    <input type="text" id="new-goal" placeholder="Enter new fitness goal">
    <button type="submit">Add Goal</button>
</form>
<ul id="fitness-goals"></ul>
```

```javascript
const form = document.querySelector('#goal-form');
const goalList = document.querySelector('#fitness-goals');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const goalInput = document.querySelector('#new-goal');
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput.value;
    goalList.appendChild(newGoal);
    goalInput.value = ''; // Clear input field
});
```

Mastering the dynamic addition and removal of elements allows for a more interactive and responsive user experience on your web pages. By practicing these skills, you're taking a big step towards building sophisticated web applications that respond to user inputs in real time, making your fitness tracking project more engaging and user-friendly.