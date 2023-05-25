import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
//import { HttpHeaders } from '@angular/common/http';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Transaction } from '../transactions/transaction';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     //'Authorization': 'my-auth-token'
//     'Access-Control-Allow-Origin': '*'
//   })
// };

@Injectable()
export class AddTransactionService {
  transactionsUrl = 'http://127.0.0.1:5000/makeentries';  // URL to web api
  private handleError: HandleError;

  constructor(
       private http: HttpClient,
       httpErrorHandler: HttpErrorHandler) {
       this.handleError = httpErrorHandler.createHandleError('TransactionsService');
  }

  makeEnties(transactions: Transaction[]): void { //Observable<String>
    console.log('Making entries..');
    console.log(transactions);
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    //let options = new RequestOptions({ headers: myHeaders });
    // return this.http.post(this.transactionsUrl, transactions, options)
    // .map((res: Response) => res)
    // .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    //  .pipe(
    //    catchError(this.handleError('getAllTransactions', []))
    //  );
  }

}