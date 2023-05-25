import { Component, OnInit } from '@angular/core';

import { Transaction } from './transaction';
import { TransactionsService } from '../services/transactions.service';

@Component({
  selector: 'main-panel',
  templateUrl: './transactions.component.html',
  providers: [ TransactionsService ],
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit{
  subtitle = "Transactions";
  data: String;
  public transactions: Transaction[];

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
     this.showTransaction();
   }

  showTransaction(): void {
    //this.transactionsService.getApp();
    // this.transactionsService.getAllTransactions()
    //   .subscribe(transactions => this.transactions = transactions,
    //     err => {
    //       console.log(err);
    //     }
    //   );
    //console.log(this.transactions);
  }
}