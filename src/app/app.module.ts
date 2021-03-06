import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoachingPortalComponent } from './coachingcomponent/coaching-portal/coaching-portal.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentPortalComponent } from './navbarcomponents/student-portal/student-portal.component';
import { StudentComponent } from './student/student.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CoachingPortalComponent,
    RegistrationComponent,
    StudentPortalComponent,
    StudentComponent,
    StudentHomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
