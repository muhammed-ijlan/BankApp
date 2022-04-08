import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

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
  constructor(private router: Router, private ds: DataService) {}

  ngOnInit(): void {}

  accnoChange(event: any) {
    this.acno = event.target.value;
  }
  pswdChange(event: any) {
    this.pswd = event.target.value;
  }

  login() {
    var acno = this.acno;
    var pswd = this.pswd;

    const result = this.ds.login(acno, pswd);
    if (result) {
      alert('login successfull');
      this.router.navigateByUrl('dashboard');
    }
  }
}

// two way binding

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
