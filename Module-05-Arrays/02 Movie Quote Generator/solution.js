const movies = [
    {
        title: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        genre: "Sci-Fi"
    },
    {
        title: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        genre: "Drama"
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        year: 1994,
        genre: "Crime"
    }
];

// Function to generate a random movie quote
function getRandomMovieQuote() {
    const quotes = [
        "Your mind is the scene of the crime.",
        "Hope is a good thing, maybe the best of things, and no good thing ever dies.",
        "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men."
        // Add more movie quotes here
    ];

    // Generate a random index to select a random quote
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // Return the selected random quote
    return quotes[randomIndex];
}

// Function to log movie attributes and a random quote
function randomMovieQuote(movieArray) {
    // Loop through the movieArray
    for (const movie of movieArray) {
        // Destructure the movie object to extract title and year attributes
        const { title, year } = movie;

        // Call getRandomMovieQuote to get a random movie quote
        const quote = getRandomMovieQuote();

        // Log movie title, year, and the random quote
        console.log(`Movie: ${title} (${year})`);
        console.log(`Quote: "${quote}"\n`);
    }
}

// Call the randomMovieQuote function and pass the movies array as an argument to demonstrate the functionality
randomMovieQuote(movies);


// **Explanation:**

// 1. We start by defining an array of `movies` with movie objects, each containing attributes such as `title`, `director`, `year`, and `genre`.

// 2. We define a function `getRandomMovieQuote` to generate a random movie quote. It selects a random quote from an array of quotes using a random index.

// 3. Inside the `randomMovieQuote` function, we loop through the `movieArray` parameter, which is an array of movie objects.

// 4. For each movie object, we use destructuring to extract the `title` and `year` attributes.

// 5. We call the `getRandomMovieQuote` function to get a random quote related to the current movie.

// 6. Finally, we log the movie title, year, and the random quote to the console, providing a formatted output for each movie.
