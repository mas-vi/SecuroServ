import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private apiUrl = 'http://localhost:5000/app'; 
  constructor(private http: HttpClient) { 
    
  }
   getTable1():Observable<any>
    {
      return this.http.get(`${this.apiUrl}/`); 
    }
}


