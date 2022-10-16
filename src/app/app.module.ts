import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FiltersComponent } from './components/projects/filters/filters.component';
import { TasksComponent } from './components/projects/tasks/tasks.component';
import { ProgressComponent } from './components/projects/progress/progress.component';
import { ProgressItemComponent } from './components/projects/progress/progress-item/progress-item.component';
import { TaskItemComponent } from './components/projects/tasks/task-item/task-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskItemDescriptionComponent } from './components/projects/tasks/task-item-description/task-item-description.component';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ProjectsComponent,
    FiltersComponent,
    TasksComponent,
    ProgressComponent,
    ProgressItemComponent,
    TaskItemComponent,
    TaskItemDescriptionComponent,
    CreateTaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule
  ],
  entryComponents: [TaskItemDescriptionComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule
  ]
})
export class AppModule { }
