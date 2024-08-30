**Practice Challenge: Movie Quote Generator**

**Objective:**
Apply destructuring to extract and log specific attributes from a collection of movie objects and provide a random movie quote related to each movie.

**Instructions:**

1. Create an array named `movies` containing at least three movie objects. Each movie object should have the following attributes:
   - `title` (string): The title of the movie.
   - `director` (string): The director of the movie.
   - `year` (number): The release year of the movie.
   - `genre` (string): The genre of the movie.

2. Write a function named `randomMovieQuote` that takes an array of movie objects as its parameter.

3. Inside the `randomMovieQuote` function, use destructuring to extract the `title` and `year` attributes of each movie in the array.

4. Create an array of movie quotes related to each movie. Each quote should be a string.

5. Generate a random index to select a random quote from the array of quotes.

6. Log the following information for each movie:
   - The `title` of the movie.
   - The `year` of the movie.
   - A random movie quote related to the movie.

7. Call the `randomMovieQuote` function and pass the `movies` array as an argument to demonstrate the functionality.

**Challenge Guidelines:**
- Use destructuring to elegantly extract specific attributes from each movie object.
- Ensure that your code provides a random quote for each movie.
- You can add more movie objects and quotes to the `movies` and `quotes` arrays for a larger dataset.

**Expected Output (Example):**
```
Movie: Inception (2010)
Quote: "Your mind is the scene of the crime."

Movie: The Shawshank Redemption (1994)
Quote: "Hope is a good thing, maybe the best of things, and no good thing ever dies."

Movie: Pulp Fiction (1994)
Quote: "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men."
```

Feel free to add your own fun and memorable movie quotes to the `quotes` array for a personalized touch!