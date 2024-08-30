// Add an event listener to the form with the id 'petForm' for the 'submit' event.
document.getElementById('petForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior, which would refresh the page.
    event.preventDefault();

    // Get the value entered in the 'petInput' text input field.
    let petInfo = document.getElementById('petInput').value;

    // Get the selected value from the 'typeSelect' dropdown.
    let selectedType = document.getElementById('typeSelect').value;

    // Determine the original type of the 'petInfo' variable.
    let originalType = typeof petInfo;

    // Type conversion based on the selected type from the dropdown.
    let convertedValue;

    // Use a switch statement to convert 'petInfo' to the selected type.
    switch (selectedType) {
        case 'string':
            convertedValue = String(petInfo);
            break;
        case 'number':
            convertedValue = Number(petInfo);
            break;
        case 'boolean':
            convertedValue = Boolean(petInfo);
            break;
    }

    // Create a text string that displays the original value, its type,
    // the converted value, and its type.
    let resultText = `Original Value: ${petInfo} (Type: ${originalType}) \nConverted Value: ${convertedValue} (Type: ${typeof convertedValue})`;

    // Set the text content of the 'result' div to the generated result text.
    document.getElementById('result').innerText = resultText;
});
