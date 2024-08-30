class Customer {
  constructor(name, accountNumber, initialBalance) {
    this.name = name; // Initialize the customer's name.
    let _accountNumber = accountNumber; // Private field for account number (only accessible within the class)
    this.balance = initialBalance; // Initialize the account balance.

    this.deposit = function (amount) {
      // Deposit method: Adds 'amount' to the balance.
      this.balance += amount;
      console.log("Deposited R" + amount);
    };

    this.withdraw = function (amount) {
      // Withdraw method: Subtracts 'amount' from the balance if sufficient funds are available.
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log("Withdrawn R" + amount);
      } else {
        console.log("Insufficient funds");
      }
    };

    this.displayBalance = function () {
      // Display Balance method: Shows the current account balance.
      console.log("Current balance: R" + this.balance);
    };

    this.getAccountNumber = function () {
      // Getter method for the account number (to access it while keeping it private).
      return _accountNumber;
    };
  }
}

// Create a new customer object with the name "Jamie," account number 789012, and initial balance of 500.
const customer1 = new Customer("Jamie", 789012, 500);

// Test deposit, withdraw, and displayBalance methods.
customer1.deposit(200); // Deposited R200
customer1.withdraw(100); // Withdrawn R100
customer1.displayBalance(); // Current balance: R600

// Try to access the account number (it should be private, but we use the getter method).
console.log("Account Number: " + customer1.getAccountNumber()); // Account Number: 789012


// In this code:

// - The `Customer` class represents a bank customer and encapsulates their name, account number (private), and account balance.
// - `deposit`, `withdraw`, and `displayBalance` methods perform operations on the account balance.
// - `_accountNumber` is a private field, and `getAccountNumber` is a getter method to access it from outside the class.
// - We create a `customer1` object and test the methods, including accessing the private account number through the getter method.