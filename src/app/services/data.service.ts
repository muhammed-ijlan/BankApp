import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  database: any = {
    1000: { acno: 1000, uname: 'Leo', password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: 'Ram', password: 1001, balance: 8000 },
    1002: { acno: 1002, uname: 'Neer', password: 1002, balance: 6000 },
  };

  constructor() {}

  register(uname: any, acno: any, password: any) {
    let database = this.database;

    if (acno in database) {
      //already exist acno
      return false;
    } else {
      //create new user and add into db

      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
      };
      console.log(database);

      return true;
    }
  }

  //login
  login(acno: any, pswd: any) {
    let database = this.database;

    if (acno in database) {
      if (pswd == database[acno].password) {
        return true;
      } else {
        alert('incorrect Password');
        return false;
      }
    } else {
      alert("User doesn't Exists");
      return false;
    }
  }

  //deposit
  deposit(acno: any, pswd: any, amt: any) {
    var amount = parseInt(amt);
    var database = this.database;

    if (acno in database) {
      if (pswd == database[acno].password) {
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
}
