import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResponseService {
  private apiUrl = '/api/responses/';
  http = inject(HttpClient);

  constructor() { }

  getResponse(id: string): Observable<any> {
    return this.http.get(this.apiUrl + id);
  }
}
