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
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FormComponent } from './components/create-task/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

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
    FormComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatSlideToggleModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  entryComponents: [TaskItemDescriptionComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatDialogModule, MatSlideToggleModule],
})
export class AppModule {}
