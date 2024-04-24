import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { PostServiceService } from '../post-service/post-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showdata!:any;


  constructor(private np : PostServiceService,private router: Router){
     
  }

  ngOnInit() :void{
    this.np.getPost().subscribe((data)=>{
      this.showdata=data;
    })
  }

  blogId(blog_id:string){
  // sessionStorage.setItem("blogid",val);
  this.router.navigate(['blog'],{queryParams:{blog_id}})


   
  }
  

}
