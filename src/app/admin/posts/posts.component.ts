import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service/post-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  showpost!:any;

  constructor(private ps:PostServiceService){}

  ngOnInit():void{
    this.ps.getPost().subscribe((data)=>{
      this.showpost=data;
    })
  }

  blogid(val:any){
    sessionStorage.setItem("blog_edit_id",val);
    console.log(sessionStorage.getItem("blog_edit_id"));
    
  }

  

}
