import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './dashboard/cards/cards.component';

import { SearchComponent } from './dashboard/search/search.component';
import { ExitComponent } from './exit/exit.component';
import { DeleteComponent } from './delete/delete.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditAdmProfileComponent } from './edit-adm-profile/edit-adm-profile.component';
import { AdmProfileComponent } from './adm-profile/adm-profile.component';
import { MessageComponent } from './message/message.component';
import { SaveComponent } from './save/save.component';
import { UserSimpleComponent } from './user-simple/user-simple.component';
import { FilterComponent } from './dashboard/filter/filter.component';
import { YearComponent } from './dashboard/filter/year/year.component';
import { AcademicEducationComponent } from './academic-education/academic-education.component';
import { EducationLevelComponent } from './academic-education/education-level/education-level.component';
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { CompanyCategoryComponent } from './professional-experience/company-category/company-category.component';

import { CookiesComponent } from './cookies/cookies.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';
import { LoginComponent } from './pages/login/login.component';
// import { ManagementComponent } from "./pages/management/management.component";
import { PrivacyComponent } from './privacy/privacy.component';
import { Register2Component } from './pages/register2/register2.component';
import { Register3Component } from './pages/register3/register3.component';
import { RegisterComponent } from './pages/register/register.component';
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
    FilterComponent,
    YearComponent,
    AcademicEducationComponent,
    EducationLevelComponent,
    ProfessionalExperienceComponent,
    CompanyCategoryComponent,
    ExitComponent,
    DeleteComponent,
    AddClassComponent,
    EditAdmProfileComponent,
    MessageComponent,
    SaveComponent,
    UserSimpleComponent,
    AdmProfileComponent,
    CookiesComponent,
    DashboardComponent,
    RegisterComponent,
    Register2Component,
    Register3Component,
    UserProfileComponent,
    EditUserprofileComponent,
    LoginComponent,
    // ManagementComponent,
    PrivacyComponent,
    CookiesComponent,
    RegisterComponent,
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
    ModalModule.forRoot(),
    AppRoutingModule,,
    ModalModule.forRoot(),
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }