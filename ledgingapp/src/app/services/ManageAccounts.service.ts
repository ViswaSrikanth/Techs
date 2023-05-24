import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ManageAccountsService {
    accountsURL = './assets/accountListResponse.json'

    constructor(private http: HttpClient) {}

    public populateAccountList() {
        return this.http.get
    }
}