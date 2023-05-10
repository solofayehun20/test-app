import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<{[key: string]: any}> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        
      })
    };
    const url = 'https://mst-full-stack-dev-test.herokuapp.com/';
    return this.http.get<{[key: string]: any}>(url, httpOptions);
  }

}
