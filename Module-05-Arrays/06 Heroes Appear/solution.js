const movies = ["Justice League", "Wonder Woman", "Batman vs Superman"];

// Using template literals for dynamic message
const movieList = `WonderWoman appears in: ${movies.join(", ")}.`;

// Ensuring a unique list of movies
const uniqueMovies = new Set(movies);
console.log(movieList); // "WonderWoman appears in: Justice League, Wonder Woman, Batman vs Superman."
console.log([...uniqueMovies]); // ["Justice League", "Wonder Woman", "Batman vs Superman"]

// In this code, we first use a template literal to create a dynamic message that includes the list of movies featuring WonderWoman, separated by commas. Then, we use the Set data structure to ensure a unique list of movies, and we can convert it back to an array using the spread operator if needed. Finally, we print both the dynamic message and the unique list of movies to the console.