// Define the BankAccount class
class BankAccount {
  constructor(accountNumber, initialBalance) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log("Deposited R" + amount);
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn R" + amount);
    } else {
      console.log("Insufficient funds");
    }
  }

  displayBalance() {
    console.log("Current balance: R" + this.balance);
  }
}

// Define the SavingsAccount class that inherits from BankAccount
class SavingsAccount extends BankAccount {
  constructor(accountNumber, initialBalance, interestRate) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this.balance * this.interestRate;
    this.deposit(interest);
    console.log("Interest applied: R" + interest);
  }
}

// Create instances of BankAccount and SavingsAccount
const bankAccount = new BankAccount(123456, 1000);
const savingsAccount = new SavingsAccount(789012, 5000, 0.03);

// Test deposit, withdraw, and displayBalance methods for both accounts
bankAccount.deposit(500);
savingsAccount.withdraw(1000);
bankAccount.displayBalance();
savingsAccount.displayBalance();

// Apply interest to the savings account and display the updated balance
savingsAccount.applyInterest();
savingsAccount.displayBalance();