### Practice Challenge: Zoomies Fiasco

#### Background Story
Imagine you're deeply immersed in learning to code. During a much-needed study break, you leave your desk, forgetting your energy drink open. When you return, you find your dog has drunk it and is now exhibiting an extraordinary amount of energy, zooming around the house non-stop. Your task is to simulate this "super zoomy" state and manage it using a program.

#### Challenge Description
Write a program that simulates different levels of energy the dog could have after drinking the energy drink and your responses to it. The energy levels are represented by numbers, and each number corresponds to a different state of zoominess the dog exhibits. Use a `switch` statement to handle the dog's energy levels and include a loop to simulate the passing of time as the dog's energy levels change. Optimize the loop to ensure the program runs efficiently.

#### Tasks
1. Define an integer variable `energyLevel` that represents the dog's current energy level.
2. Use a loop to simulate time passing, during which the dog's energy level can change. Within each iteration, decrease the energy level to simulate the dog getting tired.
3. Implement a `switch` statement within the loop to handle the dog's actions based on its current energy level. Define at least 4 different energy levels:
   - **High Energy (3 or above):** The dog is zooming around non-stop. Whoa!
   - **Moderate Energy (2):** The dog is playful but not overly zoomy. Jeepers!
   - **Low Energy (1):** The dog starts to slow down, taking breaks between zooms. Phew!
   - **No Energy (0):** The dog finally rests. Praise the Lord!
4. For each energy level, print a statement describing the dog's state.
5. Optimize the loop to exit once the dog's energy level reaches 0.
6. Ensure the program is efficient and avoids unnecessary checks or iterations.

#### Sample Output
```
Energy Level: 3 - The dog is zooming around non-stop! Whoa!
Energy Level: 2 - The dog is playful but not overly zoomy. Jeepers!
Energy Level: 1 - The dog starts to slow down, taking breaks between zooms. Phew!
Energy Level: 0 - The dog finally rests. Praise the Lord!
```

#### Tips
- Before the loop starts, you can set the initial energy level based on how much of the drink the dog consumed.
- Use a `while` loop that continues as long as the dog's energy level is greater than 0.
- Remember to decrease the `energyLevel` variable inside the loop to simulate the dog getting gradually tired.
- Use the `break` keyword to exit the loop immediately once the dog's energy level hits 0 to optimize the loop's performance.

This challenge is designed to test your ability to use `switch` statements effectively, manage loop execution, and think about optimizing your code for performance.