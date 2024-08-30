class Customer {
  constructor(name, accountNumber, initialBalance) {
    // Initialize the customer's name, account number (private), and balance.
    // Use an underscore prefix to indicate a private field for account number.
  }

  deposit(amount) {
    // Implement the deposit method to add 'amount' to the balance.
  }

  withdraw(amount) {
    // Implement the withdraw method to subtract 'amount' from the balance if sufficient funds are available.
    // Display an error message if there are insufficient funds.
  }

  displayBalance() {
    // Implement the displayBalance method to display the account balance.
  }

  // Add a getter method for the account number to access it.
}

// Create a new customer object.
const customer1 = new Customer("Jamie", 789012, 500);

// Test deposit, withdraw, and displayBalance methods.
customer1.deposit(200);
customer1.withdraw(100);
customer1.displayBalance();

// Try to access the account number (it should be private).
console.log("Account Number: " + customer1.getAccountNumber());
