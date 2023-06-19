import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilterComponent } from './dashboard/filter/filter.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RegisterComponent } from './pages/register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CookiesComponent } from './cookies/cookies.component';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';
import { LoginComponent } from './pages/login/login.component';
import { ManagementComponent } from "./pages/management/management.component";
import { PrivacyComponent } from './privacy/privacy.component';
import { Register2Component } from './pages/register2/register2.component';
import { Register3Component } from './pages/register3/register3.component';
import { MenuComponent } from './menu/menu.component';
import { DeleteComponent } from './delete/delete.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditAdmProfileComponent } from './edit-adm-profile/edit-adm-profile.component';
import { AdmProfileComponent } from './adm-profile/adm-profile.component';
import { MessageComponent } from './message/message.component';
import { SaveComponent } from './save/save.component';
import { UserSimpleComponent } from './user-simple/user-simple.component';
import { ClassNumberComponent } from './add-class/class-number/class-number.component';
import { EditClassroomComponent } from './edit-classroom/edit-classroom.component';
import { AcademicEducationComponent } from './academic-education/academic-education.component';
import { ForgotPasswordComponent } from './pages/login/forgot-password/forgot-password.component'
import { ProfessionalExperienceComponent } from './professional-experience/professional-experience.component';
import { StudentComponent } from './student/student.component';
import { CardManagementComponent } from './management/card-management/card-management.component';
import { LoginADMComponent } from './pages/login-adm/login-adm.component';

//IMPORTS DOS COMPONENTES DO PORTAL

const routes: Routes = [

  // -----ROTAS DO PORTAL --------
  { path: "login-adm", component: LoginADMComponent},
  { path: "student", component: StudentComponent},
  { path: "filter", component: FilterComponent},
  { path: "professional-experience", component: ProfessionalExperienceComponent},
  { path: "academic-education", component: AcademicEducationComponent},
  { path: "menu", component: MenuComponent},
  { path: "delete", component: DeleteComponent},
  { path: "add-class", component: AddClassComponent},
  { path: "edit-adm-profile", component: EditAdmProfileComponent},
  { path: "adm-profile", component: AdmProfileComponent},
  { path: "message", component: MessageComponent},
  { path: "save", component: SaveComponent},
  { path: "user-simple", component: UserSimpleComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'edit-userprofile', component: EditUserprofileComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: LoginComponent },
  { path: "management", component: ManagementComponent},
  { path: 'privacy', component: PrivacyComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'class-number', component: ClassNumberComponent },
  { path: 'edit-classroom', component: EditClassroomComponent },
  { path: 'card-management', component: CardManagementComponent },
  { path: 'register2', component: Register2Component },
  { path: 'register3', component: Register3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }