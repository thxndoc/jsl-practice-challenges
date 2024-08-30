# Practice Challenge: Inheritance in Bank Accounts**

Imagine you've just inherited a substantial sum of money from a mysterious source, and you want to add it to your bank account. In this code challenge, you will practice implementing inheritance in JavaScript by creating a `BankAccount` class and a `SavingsAccount` class that inherits from it. The `SavingsAccount` class will have additional features specific to a savings account, such as earning interest.

**Instructions:**

1. Define a `BankAccount` class with the following properties and methods:
   - Properties:
     - `accountNumber` (a unique account number)
     - `balance` (the current balance of the account)
   - Methods:
     - `constructor(accountNumber, initialBalance)` (constructor method to initialize the account with an account number and an initial balance)
     - `deposit(amount)` (method to deposit funds into the account)
     - `withdraw(amount)` (method to withdraw funds from the account)
     - `displayBalance()` (method to display the current balance)

2. Define a `SavingsAccount` class that inherits from the `BankAccount` class. The `SavingsAccount` class should have the following additional properties and methods:
   - Properties:
     - `interestRate` (the interest rate for the savings account)
   - Methods:
     - `constructor(accountNumber, initialBalance, interestRate)` (constructor method to initialize the savings account with an account number, initial balance, and interest rate)
     - `applyInterest()` (method to calculate and apply interest to the account balance)

3. Create instances of both a `BankAccount` and a `SavingsAccount`, and test their methods. You should be able to deposit, withdraw, and display balances for both account types. Additionally, apply interest to the `SavingsAccount` and verify that it works correctly.

**Output:**

›Deposited R500
›Withdrawn R1000
›Current balance: R1500
›Current balance: R4000
›Deposited R120
›Interest applied: R120
›Current balance: R4120

In this code challenge, you'll create two classes: `BankAccount` and `SavingsAccount`, with the latter inheriting from the former. You'll implement the necessary methods and test the functionality of both account types.