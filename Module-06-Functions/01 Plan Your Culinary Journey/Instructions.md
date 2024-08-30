### Practice Challenge: "Plan Your Culinary Journey"

#### Challenge Overview
You're tasked with creating an interactive web application that allows users to plan their culinary journey around the world. The app will enable users to select a country and a food item they wish to explore, calculate the estimated cost of their journey, and display a personalized message with their culinary destination and estimated expenses.

#### Objectives
- Practice declaring and invoking functions.
- Use parameters, return statements, and function expressions.
- Apply naming conventions and understand different ways to define functions.

#### Challenge Instructions
1. **Create a Function to Display Culinary Destinations**:
   - Define a function named `displayDestination` that accepts two parameters: `country` and `dish`.
   - Inside the function, log a message to the console in the format: "Exploring the taste of `dish` in `country`!".

2. **Calculate and Display the Journey Cost**:
   - Define a function named `calculateJourneyCost` that takes two parameters: `distance` (in miles) and `costPerMile`.
   - The function should calculate the total cost and return it.
   - Invoke `calculateJourneyCost` inside `displayDestination` to include the estimated journey cost in the message. Assume `costPerMile` is $0.5.

3. **Enhance User Interaction with a Form**:
   - Create a simple form in HTML with fields for the country, dish, and distance.
   - Include a button to submit the form.
   - Use JavaScript to capture form submissions and invoke `displayDestination` with form values.

4. **Implement a Function Expression for Special Dishes**:
   - Create a function expression named `specialDishMessage` that takes a `dish` as a parameter.
   - If the dish is "Sushi", return "A healthy choice!"; otherwise, return "An interesting selection!".
   - Include this message in the output of `displayDestination`.


This challenge combines function declarations, expressions, parameters, and interaction with the DOM to create a fun and interactive culinary journey planner. By completing this challenge, students will deepen their understanding of JavaScript functions and how they can be used to manipulate data and interact with users.

#### Solution:

Swap your index.js script tag in your HTML file to the solution.js script.
<!-- <script src="solution.js" defer></script> -->