import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/app'; 

  constructor(private http: HttpClient, private router: Router,private cookieService: CookieService) {}

  login(username: string, password: string) {
    console.log("Here")
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { withCredentials: true }).subscribe(
      (response: any) => {
        this.cookieService.deleteAll('jwt');
        localStorage.setItem('jwt', response.accessToken);

        this.router.navigate(['/dashboard']);
        
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.http.post(`${this.apiUrl}/logout`, {}, { withCredentials: true }).subscribe(() => {
      
      localStorage.removeItem('jwt');

      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');

    console.log(token);
    return !!token;
  }

  getToken() {
    const token = localStorage.getItem('jwt');
    return token;
  }
  register(username: string, password: string,firstname:string,lastname:string,email:string,company:string) {
    
    return this.http.post(`${this.apiUrl}/register`, { username, password,firstname,lastname,email,company }, { withCredentials: true }).subscribe(
      (response: any) => {
       
       
        this.router.navigate(['/login']);
        
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
