const seriesNetflix = [
    "Stranger Things \uD83D\uDC7D", // Alien Emoji
    "13 Razones Por Qué \uD83E\uDDE8", // Blood Emoji
    "El Brujo \u2694️", // Sword Emoji
    "La Casa de Papel \uD83E\uDD11", // Money Face Emoji
    "Riverdale \uD83C\uDF84",
    "Educación Sexual \uD83C\uDF4C",
    "The Umbrella Academy \u2614", // Umbrella Emoji
    "Élite \uD83D\uDD2B", // Gun Emoji
    "Ozark \uD83D\uDC0A", // Pill Emoji
    "Sombras y Huesos \uD83E\uDD84", // Magic Wand Emoji
    "One Piece \uD83E\uDD4B" // Martial Arts Uniform Emoji
];

// This function is named 'printFavoriteSeries' and it is designed to display the name of a series
// based on the user input (index) provided in an HTML input field.

function printFavoriteSeries() {
    // Retrieve the value entered by the user in the HTML element with the ID 'seriesIndex'
    let index = document.getElementById('seriesIndex').value;

    // Retrieve the HTML element with the ID 'seriesName' where the series name will be displayed
    let seriesNameDiv = document.getElementById('seriesName');

    // Check if the entered index is a valid index within the 'seriesNetflix' array
    if (index >= 0 && index < seriesNetflix.length) {
        // If the index is valid, set the text content of 'seriesNameDiv' to the series name
        // corresponding to the entered index from the 'seriesNetflix' array
        seriesNameDiv.textContent = seriesNetflix[index];
    } else {
        // If the entered index is not valid (negative or greater than the array length),
        // display an error message by setting the text content of 'seriesNameDiv' to "Índice inválido"
        seriesNameDiv.textContent = "Índice inválido";
    }
}
