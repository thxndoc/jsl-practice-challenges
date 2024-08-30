// Function to process pizza order
function processOrder(order, callback) {
    // Check if the pizza name is "Unknown Pizza"
    if (order.pizzaName === "Unknown Pizza") {
        // If it is, invoke the callback with an error message
        callback("Sorry, we do not have that pizza.");
    } else {
        // If it's a valid pizza name, construct a success message
        const successMessage = `Your order for ${order.pizzaName} has been received and is being prepared.`;
        
        // Invoke the callback with a null error and the success message
        callback(null, successMessage);
    }
}

// Add event listener to the order button
document.getElementById('orderPizza').addEventListener('click', function() {
    // Get the pizza name from the input field
    const pizzaName = document.getElementById('pizzaName').value;
    
    // Create an order object with the pizza name
    const order = { pizzaName: pizzaName };

    // Call the processOrder function with the order object
    // Use a callback function to handle the result
    processOrder(order, function(error, success) {
        // Check if there is an error message
        if (error) {
            // If there is an error, display it in the 'orderStatus' element
            document.getElementById('orderStatus').textContent = error;
        } else {
            // If there is no error, display the success message in the 'orderStatus' element
            document.getElementById('orderStatus').textContent = success;
        }
    });
});
