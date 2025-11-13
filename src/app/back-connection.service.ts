import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class BackConnection {
  private apiUrl = 'http://localhost:3000/api/v1'; 

  constructor(private http: HttpClient) { }

  getCarrears(): Observable<any> {
    return this.http.get(`${this.apiUrl}/carrear`);
  }
}
