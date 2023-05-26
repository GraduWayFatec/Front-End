import { AppRoutingModule } from './app-routing.module';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt'

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
import { CourseComponent } from './dashboard/filter/course/course.component';

import { CookiesComponent } from './cookies/cookies.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { UserProfileComponent } from './user-profile/user-profile.component';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';
import { LoginComponent } from './pages/login/login.component';
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

import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component';
import { ClassNumberComponent } from './add-class/class-number/class-number.component';
import { GenderComponent } from './edit-userprofile/gender/gender.component';
import { HttpClientModule } from '@angular/common/http';

registerLocaleData(localePT);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsComponent,
    SearchComponent,
    FilterComponent,
    YearComponent,
    CourseComponent,
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
    ManagementComponent,
    PrivacyComponent,
    CookiesComponent,
    RegisterComponent,
    BodyManagementComponent,
    CardManagementComponent,
    StudentComponent,
    CardStudentComponent,
    EditClassroomComponent,
    CardEditStudentComponent,

    ForgotPasswordComponent,
    ClassNumberComponent,
    GenderComponent,
],
  
  imports: [
    BrowserModule,
    ModalModule.forRoot(),
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [ 
    {provide: LOCALE_ID, useValue: 'pt-br'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }