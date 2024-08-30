javascript
const netflixSeries = [
    "Stranger Things 👽",
    "13 Reasons Why 🩸",
    "The Witcher ⚔️",
    "Money Heist 🤑",
    "Riverdale 🎄",
    "Sex Education 🍌",
    "The Umbrella Academy ☔",
    "Elite 🔫",
    "Ozark 💊",
    "Shadow and Bone 🪄",
    "One Piece 🥋"
];

function printFavoriteSeries() {
    let index = document.getElementById('seriesIndex').value;
    let seriesNameDiv = document.getElementById('seriesName');

    if(index >= 0 && index < netflixSeries.length) {
        seriesNameDiv.textContent = netflixSeries[index];
    } else {
        seriesNameDiv.textContent = "Invalid index";
    }
}

