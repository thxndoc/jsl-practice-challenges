let bankAccount = {
  holderName: "Jamie",
  accountNumber: 789012,
  balance: 500,

  // 1. **Deposit Method**: Adds money to the balance.
  deposit: function(amount) {
    // Add the 'amount' to the 'balance' property.
    // You should use 'this' to refer to the current object.
    // Display a message like "Deposited R(amount)" to show the deposit.
  },

  // 2. **Withdraw Method**: Subtracts money from the balance if enough funds are available.
  withdraw: function(amount) {
    // Check if there are sufficient funds (balance >= amount) to withdraw.
    // If there are, subtract 'amount' from the 'balance' property.
    // If not, display a message like "Insufficient funds".
    // Also, display a message like "Withdrawn R(amount)" if the withdrawal is successful.
  },

  // 3. **Display Balance Method**: Shows the current balance.
  displayBalance: function() {
    // Display the current balance with a message like "Current balance: R(balance)".
  }
};

console.log("Account Holder: " + bankAccount.holderName);
console.log("Account Number: " + bankAccount.accountNumber);
console.log("Balance: R" + bankAccount.balance);

// Practice Challenge: Enhancing the Bank Account Object
bankAccount.deposit(200);
bankAccount.withdraw(100);
bankAccount.displayBalance(); // Should output: Current balance: R600
