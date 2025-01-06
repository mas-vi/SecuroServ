import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = '/api';
  success: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(username: string, password: string) {
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { withCredentials: true }).subscribe(
      (response: any) => {
        this.cookieService.deleteAll();
        localStorage.setItem('jwt', response.accessToken);
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(
      () => {
        localStorage.removeItem('jwt');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error('Logout failed', error);
      }
    );
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('jwt');
  }

  getToken() {
    return localStorage.getItem('jwt');
  }

  register(username: string, password: string, firstname: string, lastname: string, email: string, company: string) {
    return this.http.post(
      `${this.apiUrl}/register`,
      { username, password, firstname, lastname, email, company },
      { withCredentials: true }
    ).subscribe(
      () => {
        this.router.navigate(['/login']);
        this.success = true;
      },
      (error) => {
        console.error('Registration failed', error);
      }
    );
  }
}

