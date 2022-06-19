import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(body: any) : Observable<any> {
    return this.http.post('https://localhost:44391/api/login', body, {responseType: 'text'});
  }
}
