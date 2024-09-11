// Create a simple web application to display your favorite movies using JavaScript arrays. This challenge will help you understand how to store and access data in arrays.

// Step 1: Create an array named myFavoriteMovies and populate it with the titles of five movies you enjoy.
let myFavoriteMovies = [
    "White Chicks",
    "Fantastic Beasts",
    "Avengers",
    "Black Panther",
    "Top Gun - Maverick"
]; //remember that arrays are represented as strings

// Step 2: Access the first and the last movie from your myFavoriteMovies array.
let firstMovie = myFavoriteMovies[0];
let lastMovie = myFavoriteMovies[myFavoriteMovies.length - 1];
// Break down of myFavoriteMovies.length - 1 step by step:
// myFavoriteMovies.length: This part of the code gets the total number of items (movies) in the list called myFavoriteMovies. For example, if there are 5 movies in the list, myFavoriteMovies.length would give the value 5.
// - 1: Since arrays in programming start counting from 0 (not 1), the last item in the list is at the position length - 1. If the total length is 5, the last movie is at position 4. So, subtracting 1 helps us find the correct position (or index) of the last movie.
// In summary, myFavoriteMovies.length - 1 calculates the position of the last item in the list by taking the total number of items and subtracting one.

// Display the first and the last movie on the web page.
function displayMovies() {
    // Use document.getElementById to find the movies div.
   let moviesDiv = document.getElementById('movies');
   console.log(moviesDiv)
    // Create and append the first movie title.
    let firstMovieElement = document.createElement('p');
    firstMovieElement.textContent = `First movie: ${firstMovie}`;
    moviesDiv.appendChild(firstMovieElement);

    // Create and append the last movie title.
    let lastMovieElement = document.createElement('p');
    lastMovieElement.textContent = `Last movie: ${lastMovie}`;
    moviesDiv.appendChild(lastMovieElement);

}

// Call the displayMovies function to display the movies.
displayMovies()