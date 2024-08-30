// Step 1: Create an array named myFavoriteMovies and populate it with the titles of five movies you enjoy.
let myFavoriteMovies = [
    "Spider-Man: Into the Spider-Verse",
    "The Hunger Games",
    "Saltburn",
    "The Fault in Our Stars",
    "Superbad"
];

// Step 2: Access the first and the last movie from your myFavoriteMovies array.
let firstMovie = myFavoriteMovies[0];
let lastMovie = myFavoriteMovies[myFavoriteMovies.length - 1];

// Display the first and the last movie on the web page.
function displayMovies() {
    // Use document.getElementById to find the movies div.
    let moviesDiv = document.getElementById('movies');

    // Create and append the first movie title.
    let firstMovieElement = document.createElement('p');
    firstMovieElement.textContent = `First Movie: ${firstMovie}`;
    moviesDiv.appendChild(firstMovieElement);

    // Create and append the last movie title.
    let lastMovieElement = document.createElement('p');
    lastMovieElement.textContent = `Last Movie: ${lastMovie}`;
    moviesDiv.appendChild(lastMovieElement);
}

// Call the displayMovies function to display the movies.
displayMovies();
