import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CookiesComponent } from './cookies/cookies.component';
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


//IMPORTS DOS COMPONENTES DO PORTAL

const routes: Routes = [

  // -----ROTAS DO PORTAL --------
  // { path: 'cookies', component: CookiesComponent },
  // { path: "dashboard", component: DashboardComponent},
  // { path: 'register', component: RegisterComponent },
  // { path: 'user-profile', component: UserProfileComponent },
  // { path: 'cookies', component: CookiesComponent },
  // { path: 'edit-userprofile', component: EditUserprofileComponent },
  // { path: 'login', component: LoginComponent },
  // { path: '', component: LoginComponent },
  // { path: "management", component: ManagementComponent},
  // { path: 'privacy', component: PrivacyComponent },
  // { path: 'register2', component: Register2Component },
  // { path: 'register3', component: Register3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
