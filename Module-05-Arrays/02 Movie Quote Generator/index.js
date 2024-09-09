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
    const randomIndex = Math.floor(Math.random() * quotes.length)

    // Return the selected random quote
    return quotes[randomIndex]
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

        }
    }

// Call the randomMovieQuote function and pass the movies array as an argument to demonstrate the functionality