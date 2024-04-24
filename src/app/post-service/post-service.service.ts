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
  showTitlePostService(blog_id:any):Observable<any>{
    return this.http.get(`${this.url}/post/showtitlepost/${blog_id}`);
  }

  //
  addPost(posts:any):Observable<any>{
    return this.http.post(`${this.url}/post/addpost`,posts);
  }

  //
  updatePost(blog_id:any,blogdata:any){
    return this.http.put(`${this.url}/posts/${blog_id}`,blogdata);
  }

  deletePost(blog_id:any):Observable<any>{
    return this.http.delete(`${this.url}/post/deletepost/${blog_id}`);
  }

}
