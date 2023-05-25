import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }           from './app.component';
import { MainPanelComponent }    from './dashboard/mainpanel.component';
import { AccountReportComponent }    from './reports/accountreport.component';
import { TransactionsComponent }    from './transactions/transactions.component';
import { ManageAccountsComponent }    from './accounting/manageaccounts.component';
import { AddTransactionComponent }    from './transactions/add/addtransaction.component';
import { AdditionComponent } from './accounting/addition/addition.component';
import { TransactionFlowsComponent } from './accounting/transaction-flows/transaction-flows.component';
import { ListAccountComponent } from './accounting/lists/lists.component';

//import { AuthGuard }                from '../auth-guard.service';

// const appRoutes: Routes = [
//   {
//     path: '',
//     component: AppComponent,
//     //canActivate: [AuthGuard],
//     children: [
//       {
//         path: '',
//         //canActivateChild: [AuthGuard],
//         children: [
//           { path: 'home', component: MainPanelComponent },
//           { path: 'accountreport', component: AccountReportComponent },
//           { path: '', component: MainPanelComponent }
//         ]
//       }
//     ]
//   }
// ];

const appRoutes: Routes = [
  { path: 'home', component: MainPanelComponent },
  { path: 'accountreport', component: AccountReportComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'manageaccounts', component: ManageAccountsComponent },
  { path: 'make_a_transaction', component: AddTransactionComponent },
  { path: 'addaccount', component: AdditionComponent },
  { path: 'transactionGraph', component:  TransactionFlowsComponent},
  { path: 'listaccounts', component:  ListAccountComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
