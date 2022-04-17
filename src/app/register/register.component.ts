import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  uname = '';
  acno = '';
  pswd = '';

  //register form model
  registerForm = this.fb.group({
    uname: [''],
    acno: [''],
    pswd: [''],
  });

  constructor(
    private router: Router,
    private db: DataService,
    private fb: FormBuilder
  ) {}

  register() {
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    var uname = this.registerForm.value.uname;
    const result = this.db.register(uname, acno, pswd);
    if (result) {
      alert('succesfully register');
      console.log(this.db.database);

      this.router.navigateByUrl('');
    } else {
      alert('account already exist');
    }
  }

  ngOnInit(): void {}
}
