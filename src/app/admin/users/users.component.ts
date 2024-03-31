import { Component } from '@angular/core';
import { RegServiceService } from '../../users-service/reg-service.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  //4
  users!:any;

  //5
  constructor(private us:RegServiceService){}

  //6
  ngOnInit():void{
    this.us.getUser().subscribe((data)=>{
      this.users=data;
    })
  }
  

}
