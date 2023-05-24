import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { HttpErrorHandler }     from './http-error-handler.service';
import { MessageService }       from './message.service';
import { AppComponent } from './app.component';
import { HeadComponent } from './header/head.component';
import { MainPanelComponent } from './dashboard/mainpanel.component';
import { AccountReportComponent } from './reports/accountreport.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ManageAccountsComponent } from './accounting/manageaccounts.component';
import { TransactionsService }       from './services/transactions.service';
import { AppRoutingModule }       from './app-routing.module';
import { AddTransactionComponent }       from './transactions/add/addtransaction.component';
import { WidgetloadingComponent } from './appcapabilities/widgetloading/widgetloading.component';
import { AdditionComponent } from './accounting/addition/addition.component';
import { ListAccountComponent } from './accounting/lists/lists.component';
import { TransactionFlowsComponent } from './accounting/transaction-flows/transaction-flows.component';

@NgModule({
  declarations: [
    AppComponent, HeadComponent
    , MainPanelComponent, AccountReportComponent
    ,TransactionsComponent, ManageAccountsComponent
    ,AddTransactionComponent, WidgetloadingComponent, AdditionComponent, ListAccountComponent, TransactionFlowsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule
    //TransactionsService
  ],
  providers: [
    HttpErrorHandler,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
