import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MyProfileComponent } from './components/home/my-profile/my-profile.component';
import { LoginComponent } from './components/login/login.component';
import { NotActiveUserComponent } from './components/not-active-user/not-active-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', redirectTo: '' },
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: MyProfileComponent },
  { path: 'notActive', component: NotActiveUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
