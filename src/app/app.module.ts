import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './client/footer/footer.component';
import { NavbarComponent } from './client/navbar/navbar.component';
import { ContactComponent } from './client/contact/contact.component';
import { SignupComponent } from './client/signup/signup.component';
import { LoginComponent } from './client/login/login.component';
import { HomeComponent } from './client/home/home.component';
import { VisiteurComponent } from './client/visiteur/visiteur.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapsComponent } from './maps/maps.component';
import { PhotosComponent } from './photos/photos.component';
import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    VisiteurComponent,
    DashboardComponent,
    MapsComponent,
    PhotosComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
