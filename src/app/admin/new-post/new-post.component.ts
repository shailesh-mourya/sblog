import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PostServiceService } from '../../post-service/post-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-new-post',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './new-post.component.html',
  styleUrl: './new-post.component.css'
})
export class NewPostComponent {
  postsForm!:FormGroup;



  constructor(private fb2:FormBuilder,private np:PostServiceService){
    this.postsForm = this.fb2.group({
      title:['',Validators.required],
      description :['',Validators.required],
      content :['',Validators.required],
      
    })
  }


  Add(){
    this.np.addPost(this.postsForm.value).subscribe((data)=>{
      console.log('post added');
      
    })
    
  }

}
