// Initial dog's energy level
let energyLevel = 3; // Adjust this value to see different actions

// Loop to simulate time passing and decrease in energy level
while (energyLevel > 0) {
    // Switch statement to handle the dog's current energy level
    switch (energyLevel) {
        case 3:
        case 2:
            console.log(`Energy Level: ${energyLevel} - The dog is zooming around non-stop!`);
            break;
        case 1:
            console.log(`Energy Level: ${energyLevel} - The dog is playful but not overly zoomy.`);
            break;
        default:
            console.log(`Energy Level: ${energyLevel} - The dog starts to slow down, taking breaks between zooms.`);
            break;
    }

    // Decrease energy level to simulate the dog getting tired
    energyLevel--;

    // Optional: Add a delay for readability of the output
    // Note: This delay function is for demonstration and might not work in all JavaScript environments
    // await new Promise(resolve => setTimeout(resolve, 1000)); https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
}

console.log("Energy Level: 0 - The dog finally rests.");
