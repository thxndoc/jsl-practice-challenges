// Base class: BankAccount
class BankAccount {
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
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

// Derived class: SavingsAccount
class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    // Implement the applyInterest method to calculate and add interest based on 'interestRate'.
    const interest = this.balance * this.interestRate;
    this.deposit(interest);
    console.log("Interest applied: R" + interest);
  }
}

// Derived class: CheckingAccount
class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdrawWithOverdraft(amount) {
    // Implement the withdrawWithOverdraft method to allow limited overdraft (up to overdraftLimit).
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
      console.log("Withdrawn R" + amount);
    } else {
      console.log("Overdraft limit exceeded");
    }
  }
}

// Create instances of SavingsAccount and CheckingAccount and test their methods.
const savingsAccount = new SavingsAccount("SAV123", 1000, 0.03);
const checkingAccount = new CheckingAccount("CHK456", 500, 100);

savingsAccount.applyInterest(); // Apply interest: R30
checkingAccount.withdrawWithOverdraft(700); // Withdrawn R700
