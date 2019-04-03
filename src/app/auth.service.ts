import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
// import 'rxjs/add/operator';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  details: any;

  constructor(private http: Http) { }

  sendLoginDetails(login_details) {
    const headers = new Headers();
    headers.append('Content-Type', ' application/json');
    return this.http.post('/login', login_details, {headers: headers}).pipe(map(res => res.json()));
  }
}
