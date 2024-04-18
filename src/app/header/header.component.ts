import { Component } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { RouterLink } from '@angular/router';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UserLoginComponent,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // searchQuery!:FormGroup;

    

  // constructor() { }

  // search(): void {
  //   // Perform search operation here using this.searchQuery
  //   console.log('Search query:', this.searchQuery);
  
   
  // }

  
  

}
