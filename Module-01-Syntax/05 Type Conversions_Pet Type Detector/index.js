// Debug this code. What's missing?
// Write a JavaScript function that triggers on form submission.
document.getElementById('petForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior, which would refresh the page.
    event.preventDefault();

    // Retrieve the input value and the selected data type from the form.
    let petInfo = document.getElementById('').value;
    let selectedType = document.getElementById('').value;

    // Perform type checking on the input value using `typeof` and display the original type.
    let originalType = typeof ;

    // Perform explicit type conversion based on the selected data type.
    // Use `String()`, `Number()`, and `Boolean()` conversion functions as needed.
    let convertedValue;

    // Handle special cases like `NaN` and falsy values, and explain them in comments.
    switch () {
        case 'string':
            // Use `String()` to convert to a string. Handles NaN and falsy values.
            convertedValue = String();
            break;
        case 'number':
            // Use `Number()` to convert to a number. Handles NaN and falsy values.
            convertedValue = Number();
            break;
        case 'boolean':
            // Use `Boolean()` to convert to a boolean. Handles falsy values.
            convertedValue = Boolean();
            break;
    }

    // Display the converted value and its new type.
    let resultText = `Original Value: ${petInfo} (Type: ${originalType}) \nConverted Value: ${convertedValue} (Type: ${typeof convertedValue})`;

    // Set the text content of the 'result' div to the generated result text.
    document.getElementById('result').innerText = resultText;
});
