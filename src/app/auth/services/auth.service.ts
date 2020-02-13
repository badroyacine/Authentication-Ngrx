import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    console.log(`${this.baseUrl}/users/login`, credentials);
    return this.http.post<any>(`${this.baseUrl}/users/login`, credentials);
  }

  signup(credentials): Observable<any> {
    console.log(`${this.baseUrl}/users/signup`, credentials);
    return this.http.post<any>(`${this.baseUrl}/users/signup`, credentials);
  }

  logout(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/logout`);
  }
}
