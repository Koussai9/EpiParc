import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './client/contact/contact.component';
import { AboutusComponent } from './client/aboutus/aboutus.component';
import { LoginComponent } from './client/login/login.component';
import { SignupComponent } from './client/signup/signup.component';
import { HomeComponent } from './client/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PhotosComponent } from './photos/photos.component';
import { MapsComponent } from './maps/maps.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' }, 
  {path: 'contact', component: ContactComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeComponent},
 //{path: 'dashboard', component: DashboardComponent},
  {path: 'photos', component: PhotosComponent},
  {path: 'maps', component: MapsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
