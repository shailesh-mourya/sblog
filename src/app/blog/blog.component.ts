import { Component } from '@angular/core';
import { PostServiceService } from '../post-service/post-service.service';

import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog!: any;
  blogid:any;
  
  //title : string = "The Art of Minimalism: Simplify Your Life and Find Joy";
 // blogid = sessionStorage.getItem("blogid") ;

 constructor(private tp: PostServiceService, private activeR: ActivatedRoute) { }

  ngOnInit(): void {
    this.activeR.queryParams.subscribe(params => {
      this.blogid = params['blog_id'];
      if (this.blogid) {
        console.log("blogid is ",this.blogid);
        
        this.showBlog(this.blogid);
      } else {
        console.log("id not geted");
        
        // Handle when blog_id is not available
      }
    });
  }

  // showBlog(id: any): void {
  //   this.tp.showTitlePostService(id).subscribe((data) => {
      
  //     this.blog = data;
  //     if(this.blog){
  //       console.log("data coming");
        
  //     }
  //     else{
  //       console.log("data not coming");
        
  //     }
  //     console.log(this.blog);
  //   });
  // }


  async showBlog(id: any): Promise<void> {
    try {
      const data = await this.tp.showTitlePostService(id).toPromise();
      this.blog = data;
      if (this.blog) {
        console.log("data coming",this.blog);

      } else {
        console.log("data not coming");
      }
      console.log(this.blog);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  }
  



}
