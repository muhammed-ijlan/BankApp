import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  acno = '';
  pswd = '';
  amount = '';

  acno1 = '';
  pswd1 = '';
  amount1 = '';

  depositForm = this.fb.group({
    acno: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount: ['', [Validators.required, Validators.pattern('[0-9.]*')]],
  });
  withdrawForm = this.fb.group({
    acno1: ['', [Validators.required, Validators.pattern('[0-9 ]*')]],
    pswd1: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amount1: ['', [Validators.required, Validators.pattern('[0-9]*')]],
  });

  constructor(private ds: DataService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  deposit() {
    let acno = this.depositForm.value.acno;
    let amount = this.depositForm.value.amount;
    let pswd = this.depositForm.value.pswd;

    if (this.depositForm.valid) {
      let result = this.ds.deposit(acno, pswd, amount);
      if (result) {
        alert(`${amount} added successfully ... New balance is ${result};`);
      }
    } else {
      alert('Invalid Form');
    }
  }

  withdraw() {
    let acno = this.withdrawForm.value.acno1;
    let pswd = this.withdrawForm.value.pswd1;
    let amount = this.withdrawForm.value.amount1;

    if (this.withdrawForm.valid) {
      let result = this.ds.withdraw(acno, pswd, amount);
      if (result) {
        alert(`${amount} is debited.. balance is ${result}`);
      }
    } else {
      alert('invalid form');
    }
  }
}
