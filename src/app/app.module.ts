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
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
// import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from 'src/environments/environment';
import { HomeworkComponent } from './components/homework/homework.component';
import { HomeFormComponent } from './components/homework/home-form/home-form.component';
import { HttpClientModule } from '@angular/common/http';
import { VolunteerComponent } from './components/volunteer/volunteer.component';
import { VolFormComponent } from './components/volunteer/vol-form/vol-form.component';
import { SosComponent } from './components/sos/sos.component';
import { PhonenoComponent } from './components/phoneno/phoneno.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { NgOtpInputModule } from 'ng-otp-input';

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
    LoginComponent,
    SignupComponent,
    HomeworkComponent,
    HomeFormComponent,
    VolunteerComponent,
    VolFormComponent,
    SosComponent,
    PhonenoComponent,
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
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    AngularFireModule.initializeApp(env.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    NgOtpInputModule,
  ],
  entryComponents: [TaskItemDescriptionComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule, MatDialogModule, MatSlideToggleModule],
})
export class AppModule {}
