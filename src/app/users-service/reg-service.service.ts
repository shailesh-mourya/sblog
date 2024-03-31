import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegServiceService {
  //1
  private url = 'http://localhost:3000';

  //2
  constructor(private http:HttpClient) { }

  //3 methods which we call in components inside
  getUser():Observable<any>{
    return this.http.get(`${this.url}/users/showusers`)
  }
}
