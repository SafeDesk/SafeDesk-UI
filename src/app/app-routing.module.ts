import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectsComponent } from './components/projects/projects.component';
import{LoginComponent} from './components/login/login.component';
const routes: Routes = [
  {path: '',component: ProjectsComponent },
  {path: 'dashboard', component: ProjectsComponent},
  {path: 'createChores', component : CreateTaskComponent},
  {
    path:'loginlink',
    component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
