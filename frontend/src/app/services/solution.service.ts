import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolutionService {
  private apiUrl = '/api/solutions/';
  http = inject(HttpClient);

  getSolution(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }

  constructor() { }
}
