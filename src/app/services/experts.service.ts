import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import { Expert } from '../interfaces/expert.model';

@Injectable({
  providedIn: 'root'
})
export class ExpertsService {
  constructor(private http: HttpClient) {}

  getExperts(): Observable<Expert> {
    return this.http.get<Expert>(`${environment.API_URL}`);
  }
}
