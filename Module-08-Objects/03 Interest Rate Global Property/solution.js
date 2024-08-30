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

// Challenge 1: Add a Global Property - baseInterestRate
globalThis.baseInterestRate = 0.025; // 2.5%

// Challenge 2: Access the Global Property and Calculate Interest
function calculateInterest(amount) {
  console.log("Calculating interest for amount:", amount);
  
  // Access 'baseInterestRate' from the global scope
  console.log("At a rate of:", globalThis.baseInterestRate);
  
  // Calculate interest and log it
  let interest = amount * globalThis.baseInterestRate;
  console.log("Interest for R" + amount + ":", interest);
}

// Testing the function
calculateInterest(1000); // Calculate interest for R1000
