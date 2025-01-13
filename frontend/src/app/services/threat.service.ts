import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThreatService {
  private apiUrl = '/api/threats/50';
  http = inject(HttpClient);

  constructor() { }

  getThreats(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
