const movies = ["Justice League", "Wonder Woman", "Batman vs Superman"];

// Use template literals to create a dynamic message
// Hint: Utilize the `join` method to concatenate array elements with commas
const movieList = `Wonder Woman appears in: ${movies.join(", ")}.`;// movies.join - show all elements in the movies array, (", ") - make sure that they are separated by a comma and space.
// Ensure a unique list of movies using Set
// Hint: Initialize a Set using the array `movies` to automatically remove duplicates
const uniqueMovies = new Set(movies);
// Print the dynamic message and the unique list of movies
console.log(movieList);
console.log([...uniqueMovies]);