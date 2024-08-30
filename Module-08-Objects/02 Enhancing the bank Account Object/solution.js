let bankAccount = {
  holderName: "Jamie",
  accountNumber: 789012,
  balance: 500,
  
  // Deposit Method
  deposit: function(amount) {
    this.balance += amount;
    console.log("Deposited R" + amount);
  },
  
  // Withdraw Method
  withdraw: function(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrawn R" + amount);
    } else {
      console.log("Insufficient funds");
    }
  },
  
  // Display Balance Method
  displayBalance: function() {
    console.log("Current balance: R" + this.balance);
  }
};

console.log("Account Holder: " + bankAccount.holderName);
console.log("Account Number: " + bankAccount.accountNumber);
console.log("Balance: R" + bankAccount.balance);

// Practice Challenge: Enhancing the Bank Account Object
bankAccount.deposit(200);
bankAccount.withdraw(100);
bankAccount.displayBalance(); // Should output: Current balance: R600
