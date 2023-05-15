import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './dashboard/cards/cards.component';

import { SearchComponent } from './dashboard/search/search.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManagementComponent } from './pages/management/management.component';
import { BodyManagementComponent } from './management/body-management/body-management.component';
import { CardManagementComponent } from './management/card-management/card-management.component';
import { StudentComponent } from './student/student.component';
import { CardStudentComponent } from './student/card-student/card-student.component';
import { EditClassroomComponent } from './edit-classroom/edit-classroom.component';
import { CardEditStudentComponent } from './edit-classroom/card-edit-student/card-edit-student.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsComponent,
    SearchComponent,
    DashboardComponent,
    ManagementComponent,
    BodyManagementComponent,
    CardManagementComponent,
    StudentComponent,
    CardStudentComponent,
    EditClassroomComponent,
    CardEditStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
