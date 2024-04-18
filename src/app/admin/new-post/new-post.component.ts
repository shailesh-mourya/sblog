import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostServiceService } from '../../post-service/post-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  postsForm!:FormGroup;
  showtoupdate!:any;

 // titleid :any=sessionStorage.getItem("blogid2");
  titleid: any= "The Art of Minimalism: Simplify Your Life and Find Joy";

  constructor(private fb2:FormBuilder,private np:PostServiceService){
    this.postsForm = this.fb2.group({
      title:['',Validators.required],
      date:['',Validators.required],
      description :['',Validators.required],
      content :['',Validators.required],
      author:['',Validators.required],
      
    })
  }

  ngOnInit(): void{
    this.showPostToUpdate(this.titleid);

  }

 
  

  showPostToUpdate(titleid:any){
    this.np.showTitlePostService(this.titleid).subscribe((data)=>{
      this.showtoupdate=data;
      console.log(this.showtoupdate);
      
    })

   

  }

  Add(){
    this.np.addPost(this.postsForm.value).subscribe((data)=>{
      console.log('post added');
      
    })
    
  }

}
