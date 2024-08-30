// Base class: BankAccount
class BankAccount {
  constructor(accountNumber, balance) {
    // Initialize the account number and balance.
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    // Implement the deposit method to add 'amount' to the balance.
  }

  withdraw(amount) {
    // Implement the withdraw method to subtract 'amount' from the balance.
    // Ensure that the withdrawal amount does not exceed the current balance.
    // Display an error message if there are insufficient funds.
  }

  displayBalance() {
    // Implement the displayBalance method to display the account balance.
  }
}

// Derived class: SavingsAccount
class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance); // Call the base class constructor
    // Initialize additional properties specific to SavingsAccount, like 'interestRate'.
  }

  // Implement methods relevant to SavingsAccount, e.g., applyInterest.
}

// Derived class: CheckingAccount
class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance); // Call the base class constructor
    // Initialize additional properties specific to CheckingAccount, like 'overdraftLimit'.
  }

  // Implement methods relevant to CheckingAccount, e.g., withdrawWithOverdraft.
}

// Create instances of SavingsAccount and CheckingAccount and test their methods.
const savingsAccount = new SavingsAccount("SAV123", 1000, 0.03);
const checkingAccount = new CheckingAccount("CHK456", 500, 100);

// Test methods specific to SavingsAccount and CheckingAccount.
savingsAccount.applyInterest(); // For SavingsAccount: Apply interest
checkingAccount.withdrawWithOverdraft(700); // For CheckingAccount: Withdraw with overdraft
