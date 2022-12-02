import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { SosComponent } from './components/sos/sos.component';
import { AuthGuard } from './services/auth.guard';
const routes: Routes = [
  { path: '',
   component: ProjectsComponent,
   canActivate:[AuthGuard] },
  { path: 'dashboard', 
  component: ProjectsComponent,
  canActivate:[AuthGuard]
 },
  { path: 'createChores', 
  component: CreateTaskComponent,
  canActivate:[AuthGuard] },
  { path: 'homework', 
  component: HomeworkComponent,
  canActivate:[AuthGuard] 
},
  { path: 'volunteer', 
  component: VolunteerComponent,
  canActivate:[AuthGuard] },
  { path: 'sos',
   component: SosComponent },
  {
    path: 'loginlink',
    component: LoginComponent,
    children: [
      {
        path: 'signuplink',
        component: SignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
