import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../transactions/transaction';
import { TRANSACTIONS } from '../transactions/mock-transactions';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     //'Authorization': 'my-auth-token'
//     'Access-Control-Allow-Origin': '*'
//   })
// };

@Injectable()
export class TransactionsService {
  transactionsUrl = 'http://127.0.0.1:5000/transactions';  // URL to web api
  private handleError: HandleError;

  constructor(
       private http: HttpClient,
       httpErrorHandler: HttpErrorHandler) {
       this.handleError = httpErrorHandler.createHandleError('TransactionsService');
  }

  getApp(): string {
    return "Hello world";
  }

  getAllTransactions(): void { //Observable<Transaction[]>
    //return TRANSACTIONS;
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('Access-Control-Allow-Origin', '*');
    // let options = new RequestOptions({ headers: myHeaders });
    // return this.http.get(this.transactionsUrl, options)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //  .pipe(
    //    catchError(this.handleError('getAllTransactions', []))
    //  );
  }

}