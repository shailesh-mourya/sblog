import { Component } from '@angular/core';
import { PostServiceService } from '../../post-service/post-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  showpost!:any;

  constructor(private ps:PostServiceService,private router:Router){}


  ngOnInit():void{
    this.ps.getPost().subscribe((data)=>{
      this.showpost=data;
    })
  }

  blogid(id:any){
    alert(id);
    this.router.navigate(['update-post'],{queryParams:{id}})
    // sessionStorage.setItem("blog_edit_id",val);
    // console.log(sessionStorage.getItem("blog_edit_id"));
    
  }

  blogDelete(blog_id:any){
    this.ps.deletePost(blog_id).subscribe(()=>{
      console.log("blog deleted");
      this.router.navigate(['posts']);
      // this.router.navigate(['blog'],{queryParams:{blog_id}})
      location.reload();
      
    })

  }

  

}
