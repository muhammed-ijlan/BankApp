import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  transaction: any;
  acno: any;

  constructor(private ds: DataService) {
    this.acno = this.ds.currentAcno;
    this.transaction = this.ds.transaction(this.acno);
    console.log(this.transaction);
  }

  ngOnInit(): void {}
}
