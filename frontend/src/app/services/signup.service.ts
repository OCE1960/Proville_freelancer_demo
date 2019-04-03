import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


   //  private BaseUrl = 'http://api.oce.com.ng/api';
    private BaseUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) { }

  signup(data) {
    return this.http.post<any>(`${this.BaseUrl}/signup`, data);
  }

  login(data) {
    return this.http.post<any>(`${this.BaseUrl}/login`, data);
  }

  activate(id, data) {
    return this.http.post<any>(`${this.BaseUrl}/activate/${id}`, data);
  }


}
