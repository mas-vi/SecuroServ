import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor() { }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
