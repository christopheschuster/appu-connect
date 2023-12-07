/* 
Filename: sophisticated_program.js

This code is a sophisticated program that simulates a bank account system. 
It includes various functionalities such as account creation, balance inquiry, deposit, withdrawal, and transaction history.
It is designed to handle multiple accounts and implement security measures. 
*/

class BankAccount {
  constructor(accountNumber, holderName, initialBalance) {
    this.accountNumber = accountNumber;
    this.holderName = holderName;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push(`Deposit: +${amount}`);
  }

  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      this.transactions.push(`Withdrawal: -${amount}`);
    } else {
      console.log("Insufficient balance!");
    }
  }

  getBalance() {
    return this.balance;
  }

  getTransactionHistory() {
    return this.transactions.join("\n");
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.accounts = [];
  }

  createAccount(accountNumber, holderName, initialBalance) {
    const existingAccount = this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );

    if (existingAccount) {
      console.log("Account number already exists!");
    } else {
      const newAccount = new BankAccount(
        accountNumber,
        holderName,
        initialBalance
      );
      this.accounts.push(newAccount);
      console.log(`Account ${accountNumber} created for ${holderName}.`);
    }
  }

  getAccount(accountNumber) {
    const account = this.accounts.find(
      (account) => account.accountNumber === accountNumber
    );

    if (account) {
      return account;
    } else {
      console.log(`Account ${accountNumber} not found.`);
      return null;
    }
  }

  deposit(accountNumber, amount) {
    const account = this.getAccount(accountNumber);

    if (account) {
      account.deposit(amount);
      console.log(`Successful deposit of ${amount} to account ${accountNumber}.`);
    }
  }

  withdraw(accountNumber, amount) {
    const account = this.getAccount(accountNumber);

    if (account) {
      account.withdraw(amount);
      console.log(`Successful withdrawal of ${amount} from account ${accountNumber}.`);
    }
  }

  getBalance(accountNumber) {
    const account = this.getAccount(accountNumber);

    if (account) {
      console.log(`Account ${accountNumber} balance: ${account.getBalance()}`);
    }
  }

  getTransactionHistory(accountNumber) {
    const account = this.getAccount(accountNumber);

    if (account) {
      console.log(`Transaction history for account ${accountNumber}:\n${account.getTransactionHistory()}`);
    }
  }
}

// Example usage:

const myBank = new Bank("XYZ Bank");

myBank.createAccount("A001", "John Doe", 500);
myBank.deposit("A001", 250);
myBank.withdraw("A001", 100);
myBank.getBalance("A001");
myBank.getTransactionHistory("A001");

myBank.createAccount("A002", "Jane Smith", 1000);
myBank.deposit("A002", 500);
myBank.withdraw("A002", 200);
myBank.getBalance("A002");
myBank.getTransactionHistory("A002");
