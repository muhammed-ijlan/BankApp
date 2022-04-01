import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //database
  database = {
    1000: { acno: 1000, uname: 'Leo', password: 1000, balance: 5000 },
    1001: { acno: 1001, uname: 'Ram', password: 1001, balance: 8000 },
    1002: { acno: 1002, uname: 'Neer', password: 1002, balance: 6000 },
  };

  acno = '';
  pswd = '';
  constructor() {}

  ngOnInit(): void {}
  login() {
    alert('Login successfull');
  }

  accnoChange(event: any) {
    this.acno = event.target.value;
  }
  pswdChange(event: any) {
    this.pswd = event.target.value;
  }
}
