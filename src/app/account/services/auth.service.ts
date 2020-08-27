import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUser } from './user.model';

const AUTH_API = 'http://localhost:8080/api/auth/';
const AUTH_APIS = 'http://localhost:8081/api/auth/';
const AUTH_APIA = 'http://localhost:8082/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(account: IUser): Observable<any> {
    return this.http.post(AUTH_API + 'userSignin', account, httpOptions);
  }

  register(account: IUser): Observable<any> {
    return this.http.post(AUTH_API + 'userSignup', account, httpOptions);
  }

  artistLogin(formData:FormData): Observable<any> {
    return this.http.post(AUTH_APIS + 'artistSignin', formData);
  }

  artistRegister(formData:FormData): Observable<any> {
    return this.http.post(AUTH_APIS + 'artistSignup', formData);
  }

  adminLogin(formData:FormData): Observable<any> {
    return this.http.post(AUTH_APIA + 'adminSignin', formData);
  }

}
