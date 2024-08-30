// Function to process pizza order
function processOrder(order, callback) {
    // Check if the pizza name is "Unknown Pizza"
    // If yes, call the callback with an error message
    // If no, call the callback with null as the first argument and a success message as the second
    
    // Hint: Use an if-else statement to check the order.pizzaName
}

// Add event listener to the order button
document.getElementById('orderPizza').addEventListener('click', function() {
    const pizzaName = document.getElementById('pizzaName').value;
    const order = { pizzaName: pizzaName };

    processOrder(order, function(error, success) {
        if (error) {
            document.getElementById('orderStatus').textContent = error;
        } else {
            document.getElementById('orderStatus').textContent = success;
        }
    });
});