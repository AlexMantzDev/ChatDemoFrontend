import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://192.168.10.103:5000';
  private userId: number | null = null;

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(
    this.hasToken()
  );
  public isAuthenticated$ = this.isAuthenticatedSubject.asObservable;

  constructor(private http: HttpClient, private router: Router) {}

  private hasToken(): boolean {
    return !!localStorage.getItem('token');
  }

  login(credentials: {
    username: string;
    password: string;
  }): Observable<{ token: string }> {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/api/v1/login`, credentials)
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

  register(userDetails: {
    username: string;
    password: string;
    color: string;
  }): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/v1/register`, userDetails);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getCurrentUserId(): number | null {
    const token = localStorage.getItem('token');
    if (token) {
      this.userId = this.decodeToken(token)?.id || null;
      return this.userId;
    } else {
      return null;
    }
  }

  private decodeToken(token: string): any | null {
    try {
      const payload = token.split('.')[1]; // Extract the payload part of the JWT
      return JSON.parse(atob(payload)); // Decode base64 and parse JSON
    } catch (error) {
      console.error('failed to decode token:', error);
      return null;
    }
  }
}
