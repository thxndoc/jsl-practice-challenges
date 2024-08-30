// #### Solution Code

// In the JavaScript code provided, you need to concatenate the topping choice to the `orderMessage` variable before displaying it. Here's how you could modify the `displayOrder` function:

// Defining a base order message as a global variable
const baseOrder = "Your order:";

// Function to display the order
function displayOrder(event) {
    // Prevent the default action if it's form submission
    event.preventDefault();

    // Accessing form elements
    const friesType = document.getElementById("friesType").value;
    const topping = document.getElementById("topping").value.trim(); // Trim to remove extra whitespace
    const orderSummary = document.getElementById("orderSummary");

    // Constructing the order message
    let orderMessage = `${baseOrder} ${friesType} Fries`;
    if (topping) {
        orderMessage += ` with ${topping}`;
    }

    // Displaying the order summary
    orderSummary.textContent = orderMessage;
}

// Adding event listener to the "Submit Order" button
document.getElementById("submitOrder").addEventListener("click", displayOrder);
