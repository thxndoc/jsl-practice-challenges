let bankAccount = {
  holderName: "Jamie",
  accountNumber: 789012,
  balance: 500,
  
  // Deposit Method
  deposit: function(amount) {
    // 1. Add the 'amount' to the 'balance' property.
    // 2. Display a message like "Deposited R(amount)" to show the deposit.
  },
  
  // Withdraw Method
  withdraw: function(amount) {
    // 1. Check if there are sufficient funds (balance >= amount) to withdraw.
    // 2. If there are, subtract 'amount' from the 'balance' property.
    // 3. If not, display a message like "Insufficient funds".
    // 4. Also, display a message like "Withdrawn R(amount)" if the withdrawal is successful.
  },
  
  // Display Balance Method
  displayBalance: function() {
    // 1. Display the current balance with a message like "Current balance: R(balance)".
  }
};

console.log("Account Holder: " + bankAccount.holderName);
console.log("Account Number: " + bankAccount.accountNumber);
console.log("Balance: R" + bankAccount.balance);

// Practice Challenge: Enhancing the Bank Account Object
bankAccount.deposit(200);
bankAccount.withdraw(100);
bankAccount.displayBalance(); // Should output: Current balance: R600

// Challenge 1: Add a Global Property - baseInterestRate
globalThis.baseInterestRate = 0.025; // 2.5%

// Challenge 2: Access the Global Property and Calculate Interest
function calculateInterest(amount) {
  // 1. Display a message like "Calculating interest for amount: amount".
  // 2. Access 'baseInterestRate' from the global scope and display it.
  // 3. Calculate interest (amount * baseInterestRate).
  // 4. Display the calculated interest amount.
}

// Testing the function
calculateInterest(1000); // Calculate interest for R1000
