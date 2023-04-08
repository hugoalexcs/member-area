import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    const body = { email, password };
    return this.http.post<User>(`${this.apiUrl}/login`, body).pipe(
      tap(user => this.setToken(user.token)),
      catchError(error => of(null))
    );
  }

  register(name: string, email: string, password: string): Observable<User> {
    const body = { name, email, password };
    return this.http.post<User>(`${this.apiUrl}/register`, body).pipe(
      tap(user => this.setToken(user.token)),
      catchError(error => of(null))
    );
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  private setToken(token: string): void {
    localStorage.setItem('token', token);
  }
}
