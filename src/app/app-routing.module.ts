import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachingPortalComponent } from './coachingcomponent/coaching-portal/coaching-portal.component';
import { RegistrationComponent } from './navbarcomponents/registration/registration.component';
import { StudentHomeComponent } from './student/student-home/student-home.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path:'registration', component: RegistrationComponent},
  {path:'student', component: StudentComponent},
  {path:'coaching-portal', component: CoachingPortalComponent},
  {path:'student-home', component: StudentHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
