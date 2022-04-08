import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}
  deposit() {
    alert('deposit clicked');
  }
  withdraw() {
    alert('withdraw clicked');
  }
}
