import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'dashboard', component: ProjectsComponent },
  { path: 'createChores', component: CreateTaskComponent },
  { path: 'homework', component: HomeworkComponent },
  { path: 'volunteer', component: VolunteerComponent },
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
