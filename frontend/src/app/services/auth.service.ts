import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  User,
  UserLogin,
  UserRegistration,
} from '../interfaces/user.interface';

const API = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  public currentUser$ = new BehaviorSubject<User | null>(null);

  constructor() {
    this.user().subscribe((user) => {
      this.currentUser$.next(user);
    });
  }

  isLoggedIn(): Observable<boolean> {
    return of(localStorage.getItem('accessToken') !== null);
  }

  public registration(body: UserRegistration): Observable<UserRegistration> {
    return this.http.post<UserRegistration>(`${API}/auth/register`, body, {
      headers: this.headers,
    });
  }

  public login(body: UserLogin): Observable<{ accessToken: string }> {
    return this.http.post<{ accessToken: string }>(`${API}/auth/login`, body, {
      headers: this.headers,
    });
  }

  public user(): Observable<User> {
    return this.http.get<User>(`${API}/auth/me`, {
      headers: this.headers,
    });
  }
}
