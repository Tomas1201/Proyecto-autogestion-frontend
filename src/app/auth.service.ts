import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://localhost:3000/api/v1/Login'; 

  constructor(private http: HttpClient) { }

 
   login(body:any, header: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/`,body, header);
  }

}
