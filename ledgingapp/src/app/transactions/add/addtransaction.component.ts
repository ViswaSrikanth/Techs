import { Component, OnInit } from '@angular/core';

import { Transaction } from '../transaction';
import { AddTransactionService } from '../../services/addtransaction.service';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';

@Component({
  selector: 'main-panel',
  templateUrl: './addtransaction.component.html',
  providers: [ AddTransactionService ],
  styleUrls: ['./addtransaction.component.css']
})
export class AddTransactionComponent implements OnInit{
  subtitle = "Accounting Entries";
  data: String;
  public transactions: Transaction[];
  numbers: Number[];
  transaction: Transaction;
  router: Router;

  constructor(private addTransactionService: AddTransactionService) { 
    //this.numbers = [1,2,3,4,5,6,7,8];
  }

  ngOnInit() {
     this.showAddForm();
   }
   
  showAddForm(): void {
    this.transactions= [
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' },
      { id: null, transaction: '', from_acc: '', to_acc: '', amount: '', description: '' }
    ];
    
  }
  saveTransactions(): void {
      console.log('Saving transaction..');
      let transactionOperation: Observable<Transaction[]>;
      this.addTransactionService.makeEnties(this.transactions);
        //.subscribe();
  }

  goTransactionHome(): void {
    console.log('Going transaction home..');
    //this.router.navigateByUrl('/transactions');
  }


  // private reset() {
  //   this.transaction.id = null;	 
  //   this.transaction.transaction = null;
  //   this.transaction.from_acc = null;
  //   this.transaction.to_acc = null;
  //   this.transaction.description = null;
  // }
}