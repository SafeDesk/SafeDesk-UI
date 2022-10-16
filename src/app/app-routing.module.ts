import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path: '',component: ProjectsComponent },
  {path: 'dashboard', component: ProjectsComponent},
  {path: 'createChores', component : CreateTaskComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
