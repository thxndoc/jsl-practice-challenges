// Define a base order message as a global variable
const baseOrder = "Your order:";

// Function to display the order
function displayOrder(event) {
    // Prevent the default action if it's form submission
    event.preventDefault();

    // Accessing form elements
    // Hint: Retrieve the selected fries type and the topping (if provided)
    const friesType = document.getElementById("friesType").value;
    const topping = document.getElementById("topping").value.trim();//remove extra whitespace
    const orderSummary = document.getElementById("orderSummary");
    // Constructing the order message
    // Challenge: Use template literals to create the order message
    let orderMessage = `${baseOrder} ${friesType} fries`;
    if (topping) {
        orderMessage += ` with ${topping}`;
    }
    // Displaying the order summary
    // Challenge: Set the text content of the "orderSummary" element to the order message
    orderSummary.textContent = orderMessage;
}

// Adding event listener to the "Submit Order" button
// Challenge: Add an event listener to the button with the id "submitOrder" and call the displayOrder function when clicked
document.getElementById("submitOrder").addEventListener("click", displayOrder);