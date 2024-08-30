const marvelMovieData = [
    { title: "Iron Man", year: 2008, revenue: 585.2 },
    { title: "Thor", year: 2011, revenue: 449.3 },
    { title: "The Avengers", year: 2012, revenue: 1518.8 },
    { title: "Guardians of the Galaxy", year: 2014, revenue: 773.3 },
    { title: "Black Panther", year: 2018, revenue: 1346.9 }
];

// Task 1: Log the title and release year of each movie using a for loop.
// It uses a for loop to iterate through the marvelMovieData array and logs the title and release year of each movie.
console.log("Task 1: Movie Titles and Release Years (for loop)");
for (let i = 0; i < marvelMovieData.length; i++) {
    console.log(`Title: ${marvelMovieData[i].title}, Year: ${marvelMovieData[i].year}`);
}

// Task 2: Create a new array movieTitles containing only the titles of the movies using the map method.
// It utilizes the map method to create a new array called movieTitles that contains only the titles of the movies from marvelMovieData.
const movieTitles = marvelMovieData.map(movie => movie.title);
console.log("\nTask 2: Movie Titles (map method)");
console.log(movieTitles);

// Task 3: Use the filter method to create a list of movies released after 2010.
// It employs the filter method to create a new array called moviesAfter2010, which includes movies released after the year 2010.
const moviesAfter2010 = marvelMovieData.filter(movie => movie.year > 2010);
console.log("\nTask 3: Movies Released After 2010 (filter method)");
console.log(moviesAfter2010);

// Task 4: Find the movie with the highest box office revenue using the reduce method.
// It utilizes the reduce method to find the movie with the highest box office revenue from marvelMovieData and stores it in the highestRevenueMovie variable.
const highestRevenueMovie = marvelMovieData.reduce((maxRevenueMovie, movie) => {
    return movie.revenue > maxRevenueMovie.revenue ? movie : maxRevenueMovie;
}, marvelMovieData[0]);

console.log("\nTask 4: Movie with Highest Revenue (reduce method)");
console.log(highestRevenueMovie);


