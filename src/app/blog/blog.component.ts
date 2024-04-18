import { Component } from '@angular/core';
import { PostServiceService } from '../post-service/post-service.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  blog!: any;
  
  //title : string = "The Art of Minimalism: Simplify Your Life and Find Joy";
  title = sessionStorage.getItem("blogid") ;

  constructor (private tp:PostServiceService){}
  //console.log(sessionStorage.getItem("blogid"));

  ngOnInit():void{
   
    console.log(this.title);
    
      this.tp.showTitlePostService(this.title).subscribe((data)=>{
        this.blog=data;
        console.log(this.blog);
        
      })
 
    

  }




  

}
