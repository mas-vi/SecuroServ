import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttackService {
  private apiUrl = 'http://localhost:5000/app/attackers/';
  http = inject(HttpClient);
  constructor() { }

  getAttack(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }
}
