import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { NewPostComponent } from './admin/new-post/new-post.component';
import { PostsComponent } from './admin/posts/posts.component';
import { UsersComponent } from './admin/users/users.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegComponent } from './user-reg/user-reg.component';

export const routes: Routes = [
    {path:"",redirectTo:"home",pathMatch:"full"},
    {path:"home",component:HomeComponent},
    {path:'',children:[
        {path:"admin-dashboard",component:AdminDashboardComponent},
        {path:"new-post",component:NewPostComponent},
        {path:"posts",component:PostsComponent},
        {path:"users",component:UsersComponent},
        {path:"admin-login",component:AdminLoginComponent},
        
    ]},
    {path:"user-login",component:UserLoginComponent},
    {path:"user-reg",component:UserRegComponent}
    
];
