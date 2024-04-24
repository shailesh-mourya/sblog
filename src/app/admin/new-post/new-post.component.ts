import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostServiceService } from '../../post-service/post-service.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  postsForm :FormGroup;
  showtoupdate!:any;
  blog_id: any;


  constructor(private fb2:FormBuilder,private np:PostServiceService,private activeR:ActivatedRoute ,private router:Router){
    this.postsForm = this.fb2.group({
      blog_id:[''],
      title:['',Validators.required],
      date:['',Validators.required],
      description :['',Validators.required],
      content :['',Validators.required],
      author:['',Validators.required],
      
    })


    this.activeR.queryParams.subscribe(x=>{
      this.blog_id= x['id']
    })
    this.showPostToUpdate(this.blog_id);
  }

  ngOnInit(): void{
  

  }

 
  showPostToUpdate(blog_id:any){
    this.np.showTitlePostService(blog_id).subscribe((data)=>{
      this.showtoupdate=data;
      if(data){
        this.postsForm.patchValue({
          blog_id:data[0].blog_id,
          title:data[0].title,
          date:data[0].date,
          description:data[0].description,
          content:data[0].content,
          author:data[0].author,
        });

      }
      else{
        console.log("data not patch ");
        
      }
      
    })

  }


   
  onSwitch(){
    if (this.blog_id) {       
      this.updateBlog();  
    }
    else{
      this.Add();
      
    }
  }


  //
updateBlog(){
  this.np.updatePost(this.blog_id,this.postsForm.value).subscribe(()=>{
    console.log("updated");
    console.log("data updated",this.postsForm.value);
    this.router.navigate(['posts']);

    

    
    
  })
}


  Add(){
    this.np.addPost(this.postsForm.value).subscribe((data)=>{
      console.log('post added');
      this.router.navigate(['posts']);
      
    })
    
  }

 

}
