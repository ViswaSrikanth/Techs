import { Component, OnInit } from '@angular/core';

import { Account } from '../models/account';

import { AccountService } from '../services/accounts.service';

@Component({
  selector: 'main-panel',
  templateUrl: './manageaccounts.component.html',
  styleUrls: ['./manageaccounts.component.css']
})
export class ManageAccountsComponent implements OnInit{
  subtitle = "Accounts"

  accounts: Account[];
  accountService: AccountService;

  ngOnInit() {
    this.populateAccountList();
  }

  populateAccountList(): void {
    //this.
  }

  // showAccountList(): void {
  //   this.accountService.getAccountList()
  //     .subscribe(accounts => this.accounts = accounts,
  //       err => {
  //         console.log(err);
  //       }
  //     );
  //   //console.log(this.transactions);
  // }
}