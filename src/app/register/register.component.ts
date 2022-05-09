import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
    uname: ['', [Validators.pattern('[a-zA-Z ]*')]],
    acno: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]],
    pswd: ['', [Validators.pattern('[a-zA-Z0-9]*')]],
  });

  constructor(
    private router: Router,
    private ds: DataService,
    private fb: FormBuilder
  ) {}

  register() {
    var acno = this.registerForm.value.acno;
    var pswd = this.registerForm.value.pswd;
    var uname = this.registerForm.value.uname;

    if (this.registerForm.valid) {
      this.ds.register(uname, acno, pswd).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
            console.log(result);
            this.router.navigateByUrl('');
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('invalid form');
    }
  }

  ngOnInit(): void {}
}
