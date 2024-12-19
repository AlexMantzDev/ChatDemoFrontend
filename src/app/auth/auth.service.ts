import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000';
  loginData = { username: 'Alex', password: '123123' };

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable;

  constructor(private http: HttpClient, private router: Router) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/api/v1/login`, {
        username,
        password,
      })
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
          this.isAuthenticatedSubject.next(true);
          this.router.navigate(['/']);
        })
      );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.isAuthenticatedSubject.getValue();
  }

  register(userDetails: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/register`, userDetails);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
