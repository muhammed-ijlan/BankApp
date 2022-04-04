import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //database
  database: any = {
    1000: { acno: 1000, uname: 'Leo', password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: 'Ram', password: 1001, balance: 8000 },
    1002: { acno: 1002, uname: 'Neer', password: 1002, balance: 6000 },
  };

  acno = '';
  pswd = '';
  constructor() {}

  ngOnInit(): void {}

  accnoChange(event: any) {
    this.acno = event.target.value;
  }
  pswdChange(event: any) {
    this.pswd = event.target.value;
  }

  // two way binding

  login() {
    let acno = this.acno;
    let pswd = this.pswd;

    if (acno in this.database) {
      if (pswd == this.database[acno].password) {
        alert('login successfull');
      } else {
        alert('Invalid Password');
      }
    } else {
      alert("User doesn't Exists");
    }
  }

  // template referencing variable

  // login(a: any, p: any) {
  //   let acno = a.value;
  //   let pswd = p.value;

  //   if (acno in this.database) {
  //     if (pswd == this.database[acno].password) {
  //       alert('Login successfull');
  //     } else {
  //       alert('incorrect password');
  //     }
  //   } else {
  //     alert('User not found');
  //   }
  // }
}
