class BankAccount {
  // The constructor method is called when a new BankAccount object is created.
  constructor(accountNumber, initialBalance) {
    // Initialize the account number and balance with values provided during object creation.
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  // The deposit method allows the account holder to add money to their account.
  deposit(amount) {
    // Increase the balance by the deposited amount.
    this.balance += amount;
    // Display a message confirming the deposit.
    console.log("Deposited R" + amount);
  }

  // The withdraw method allows the account holder to withdraw money from their account.
  withdraw(amount) {
    // Check if there is enough balance to cover the withdrawal.
    if (amount <= this.balance) {
      // If there's enough balance, deduct the withdrawal amount from the balance.
      this.balance -= amount;
      // Display a message confirming the withdrawal.
      console.log("Withdrawn R" + amount);
    } else {
      // If there's not enough balance, display a message indicating insufficient funds.
      console.log("Insufficient funds");
    }
  }

  // The displayBalance method allows the account holder to check their current balance.
  displayBalance() {
    // Display the current balance.
    console.log("Current balance: R" + this.balance);
  }
}

// This class encapsulates the functionality and data needed to manage a bank account.
// It has methods for depositing, withdrawing, and displaying the account balance.
// The constructor initializes the account with an account number and an initial balance.
// The deposit method increases the balance, the withdraw method decreases the balance (if sufficient funds are available),
// and the displayBalance method shows the current balance.

  
// 🚨 Your Turn. Define the SavingsAccount class here



// Create instances of BankAccount and SavingsAccount and test their methods
const bankAccount = new BankAccount(123456, 1000);
const savingsAccount = new SavingsAccount(789012, 5000, 0.03);

// 🚨 Your turn. Test deposit, withdraw, and displayBalance methods for both accounts


// Apply interest to the savings account and display the updated balance
savingsAccount.applyInterest();
savingsAccount.displayBalance();


// CONSOLE OUTPUT
// ›Deposited R500
// ›Withdrawn R1000
// ›Current balance: R1500
// ›Current balance: R4000
// ›Deposited R120
// ›Interest applied: R120
// ›Current balance: R4120