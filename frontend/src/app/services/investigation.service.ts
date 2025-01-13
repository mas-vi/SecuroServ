import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestigationService {
  private apiUrl = '/api/investigations/40';
  http = inject(HttpClient);

  getInvestigations(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  constructor() { }
}
