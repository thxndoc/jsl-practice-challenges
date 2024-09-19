class Customer {
  constructor(name, accountNumber, initialBalance) {
    this.name = name;
    let _accountNumber = accountNumber; // Private field for account number (only accessible within the class)
    this.balance = initialBalance;
    // Initialize the customer's name, account number (private), and balance.
    // Use an underscore prefix to indicate a private field for account number.
    this.deposit = function (amount) {
      // Implement the deposit method to add 'amount' to the balance.
      this.balance += amount;
      console.log(`Deposited R${amount}`);
    }
  
    this.withdraw = function (amount) {
      // Implement the withdraw method to subtract 'amount' from the balance if sufficient funds are available.
      // Display an error message if there are insufficient funds.
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`{Withdrawn R${amount}`);
      } else {
        console.log("Insufficient funds");
      }
    };
  
    this.displayBalance = function() {
      // Implement the displayBalance method to display the account balance.
      console.log(`Current balance: R${this.balance}`);
    }
  
    // Add a getter method for the account number to access it.
    this.getAccountNumber = function () {
      // Getter method for the account number (to access it while keeping it private).
      return _accountNumber;
    };
  }
}

// Create a new customer object.
const customer1 = new Customer("Jamie", 789012, 500);

// Test deposit, withdraw, and displayBalance methods.
customer1.deposit(200);
customer1.withdraw(100);
customer1.displayBalance();

// Try to access the account number (it should be private).
console.log(`Account Number: ${customer1.getAccountNumber()}`);
