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

class SavingsAccount extends BankAccount {
  constructor(accountNumber, balance, interestRate) {
    super(accountNumber, balance);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this.balance * this.interestRate;
    this.deposit(interest);
    console.log("Interest applied: R" + interest);
  }
}

class CheckingAccount extends BankAccount {
  constructor(accountNumber, balance, overdraftLimit) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
  }

  withdrawWithOverdraft(amount) {
    if (amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
      console.log("Withdrawn R" + amount);
    } else {
      console.log("Overdraft limit exceeded");
    }
  }
}

const savingsAccount = new SavingsAccount("SAV123", 1000, 0.03);
const checkingAccount = new CheckingAccount("CHK456", 500, 100);

savingsAccount.applyInterest();
checkingAccount.withdrawWithOverdraft(700);

// 🚨 Extending the Date object to include a new method
Date.prototype.daysUntilNextInterestDate = function() {
  // Implement the method to calculate and return the number of days until the next interest credit date for a savings account.
  // You can assume that interest is credited on the 1st of the next month.
};

// Usage
const today = new Date();
console.log(`Days until next interest date: ${today.daysUntilNextInterestDate()} days.`);
