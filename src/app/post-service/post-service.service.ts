import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
   //1
   private url = 'http://localhost:3000';

  //2
  constructor(private http:HttpClient) { }

  
  //3 methods which we call in components inside
  getPost():Observable<any>{
    return this.http.get(`${this.url}/post/showpost`)
  }

  //
  showTitlePostService(title:any):Observable<any>{
    return this.http.get(`${this.url}/post/showtitlepost/${title}`);
  }

  //
  addPost(posts:any):Observable<any>{
    return this.http.post(`${this.url}/post/addpost`,posts);
  }

  deletePost(title:any):Observable<any>{
    return this.http.delete(`${this.url}/post/deletepost/${title}`);
  }

}
