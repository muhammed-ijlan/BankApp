import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uname = '';
  acno = '';
  pswd = '';

  constructor() {}

  register() {
    alert('Register clicked');
  }

  ngOnInit(): void {}
}
