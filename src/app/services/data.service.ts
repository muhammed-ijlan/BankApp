import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  currentUser: any;
  currentAcno: any;

  database: any = {
    1000: {
      acno: 1000,
      uname: 'Leo',
      password: 1000,
      balance: 5000,
      transaction: [],
    },
    1001: {
      acno: 1001,
      uname: 'Ram',
      password: 1001,
      balance: 8000,
      transaction: [],
    },
    1002: {
      acno: 1002,
      uname: 'Neer',
      password: 1002,
      balance: 6000,
      transaction: [],
    },
  };

  constructor(private http: HttpClient) {
    this.getDetails();
  }

  //to save data in localStorage
  saveDetails() {
    localStorage.setItem('database', JSON.stringify(this.database));
    if (this.currentAcno) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentAcno));
    }
    if (this.currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
    }
  }

  //to get data from local storage
  getDetails() {
    if (localStorage.getItem('database')) {
      this.database = JSON.parse(localStorage.getItem('database') || '');
    }
    if (localStorage.getItem('currentAcno')) {
      this.currentAcno = JSON.parse(localStorage.getItem('currentAcno') || '');
    }
    if (localStorage.getItem('currentUser')) {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '');
    }
  }

  register(uname: any, acno: any, password: any) {
    const data = {
      uname,
      acno,
      password,
    };
    return this.http.post('http://localhost:3000/register', data);
  }

  //login
  login(acno: any, pswd: any) {
    //req body
    const data = {
      acno,
      pswd,
    };
    return this.http.post('http://localhost:3000/login', data);
  }

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt);
    var database = this.database;

    if (acno in database) {
      if (pswd == database[acno].password) {
        database[acno].balance += amount;

        database[acno]['transaction'].push({
          type: 'CREDIT',
          amount: amount,
        });
        this.saveDetails();
        return database[acno].balance;
      } else {
        alert('incorrect password');
        return false;
      }
    } else {
      alert("user doesn't exist");
      return false;
    }
  }

  //withdraw
  withdraw(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt);
    if (acno in this.database) {
      if (pswd == this.database[acno].password) {
        if (this.database[acno]['balance'] > amount) {
          this.database[acno]['balance'] -= amount;

          this.database[acno]['transaction'].push({
            type: 'DEBIT',
            amount: amount,
          });
          this.saveDetails();
          return this.database[acno]['balance'];
        } else {
          alert(' insufficient balance');
        }
      } else {
        alert('Incorrect Password');
      }
    } else {
      alert('User does not exist!!');
    }
  }

  // transactions
  transaction(acno: any) {
    return this.database[acno].transaction;
  }
}
