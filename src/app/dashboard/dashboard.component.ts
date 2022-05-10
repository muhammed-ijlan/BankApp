import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  accno: any;

  acno = '';
  pswd = '';
  amount = '';

  acno1 = '';
  pswd1 = '';
  amount1 = '';

  // form validation
  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });
  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  loginDate: any;

  constructor(
    private ds: DataService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.user = JSON.parse(localStorage.getItem('currentUser') || '');
    this.loginDate = new Date();
  }

  ngOnInit(): void {
    // if (!localStorage.getItem('currentAcno')) {
    //   alert('Please Login!!');
    //   this.router.navigateByUrl('');
    // }
  }

  deposit() {
    let acno = this.depositForm.value.acno;
    let amount = this.depositForm.value.amount;
    let pswd = this.depositForm.value.pswd;

    if (this.depositForm.valid) {
      this.ds.deposit(acno, pswd, amount).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }

  withdraw() {
    let acno = this.withdrawForm.value.acno1;
    let pswd = this.withdrawForm.value.pswd1;
    let amount = this.withdrawForm.value.amount1;

    if (this.withdrawForm.valid) {
      this.ds.withdraw(acno, pswd, amount).subscribe(
        (result: any) => {
          if (result) {
            alert(result.message);
          }
        },
        (result) => {
          alert(result.error.message);
        }
      );
    } else {
      alert('Invalid Form');
    }
  }
  //logout
  logOut() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('currentAcno');
    this.router.navigateByUrl('');
  }

  //delete from parent
  deleteFromParent() {
    this.accno = JSON.parse(localStorage.getItem('currentAcno') || '');
  }
  onCancel() {
    this.accno = '';
  }

  onDelete(event: any) {
    this.ds.onDelete(event).subscribe(
      (result: any) => {
        if (result) {
          alert(result.message);
          this.router.navigateByUrl('');
        }
      },
      (result) => {
        alert(result.error.message);
      }
    );
  }
}
