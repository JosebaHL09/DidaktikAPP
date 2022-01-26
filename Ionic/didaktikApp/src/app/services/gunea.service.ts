import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

import { Gunea } from '../interfaces/gunea';

@Injectable({
  providedIn: 'root'
})
export class GuneaService {
  private url = 'http://localhost:8000/api/guneaks';
  constructor(private apiService: ApiService, private http: HttpClient) { }
  getGuneak(forceRefresh: boolean): Observable<Gunea[]> {
    return this.apiService.getData(this.url, forceRefresh);
  }
  getGunea(id: number): Observable<Gunea[]> {
    return this.http.get<Gunea[]>(this.url + '/' + id);
  }
}

