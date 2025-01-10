import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {jwtDecode } from 'jwt-decode';

interface JwtCustomPayload {
  username: string;
  name: string;
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/app'; 
  success: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    if (this.isLoggedIn()) {
      this.success = true;
      this.router.navigate(['/dashboard']);
    }
  }

  login(username: string, password: string) {
   
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { withCredentials: true }).subscribe(
      (response: any) => {
        localStorage.setItem('jwt', response.accessToken);
       const decoded=jwtDecode<JwtCustomPayload>(response.accessToken);
       localStorage.setItem('user', decoded.username);
       localStorage.setItem('name', decoded.name);
       localStorage.setItem('isAdmin', decoded.isAdmin.toString());
       console.log(decoded);
        this.router.navigate(['/dashboard']);
        
      },
      (error) => {
        alert("Invalid Username or Password");
        console.error('Login failed', error);
      }
    );
  }

  logout() {
    this.http.get(`${this.apiUrl}/logout`).subscribe(() => {
      
      localStorage.removeItem('jwt');
      localStorage.removeItem('user');
      localStorage.removeItem('name');
      localStorage.removeItem('isAdmin');
      this.success = false;
      this.router.navigate(['/login']);
    });
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');


    return !!token;
  }

  getToken() {
    const token = localStorage.getItem('jwt');
    return token;
  }
  register(username: string, password: string,firstname:string,lastname:string,email:string,company:string) {
    
    return this.http.post(`${this.apiUrl}/register`, { username, password,firstname,lastname,email,company }, { withCredentials: true });
  }
}
