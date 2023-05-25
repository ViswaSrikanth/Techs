import { Injectable } from '@angular/core';
//import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };

@Injectable()
export class AccountService {
  accountsUrl = 'http://127.0.0.1:5000/accountList';  // URL to web api
  private handleError:HandleError;

  constructor(
      private http: HttpClient,
      httpErrorHandler: HttpErrorHandler) {
      this.handleError = httpErrorHandler.createHandleError('AccountService');
  }

  getApp(): string {
    return "Hello world";
  }

  getAccountList(): void { //Observable<Account[]>
    let myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    //myHeaders.append('Access-Control-Allow-Origin', '*');
    // let options = new RequestOptions({ headers: myHeaders });
    // return this.http.get(this.accountsUrl, options)
    //   .map((res: Response) => res.json())
    //   .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
