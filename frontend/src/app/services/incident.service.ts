import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Incident } from '../interfaces/incident';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  private apiUrl = 'api/incidents/50';

  constructor(private http: HttpClient) { }

  getIncidents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  changeSolvedStatus(id: string, solved: boolean): Observable<any> {
    return this.http.patch(`/api/incidents/solve/${id}`, {solved});
  }
}
