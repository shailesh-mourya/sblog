import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule ,FormsModule,FormBuilder, Validators} from '@angular/forms';
import { RegServiceService } from '../users-service/reg-service.service';

@Component({
  selector: 'app-user-reg',
  standalone: true,
  imports: [CommonModule ,ReactiveFormsModule],
  templateUrl: './user-reg.component.html',
  styleUrl: './user-reg.component.css'
})
export class UserRegComponent {
  regForm!:FormGroup;

  constructor(private fb:FormBuilder,private nr:RegServiceService){
    this.regForm=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      birthdayDate:['',Validators.required],
     gender:['',Validators.required],
     emailAddress:['',Validators.required],
     phoneNumber:['',Validators.required],
     password:['',Validators.required],
      // repass:['',Validators.required],
    })
  }

  Add(){
    this.nr.addUser(this.regForm.value).subscribe((data)=>{
      console.log('added');
      
    })
    
  }

}
