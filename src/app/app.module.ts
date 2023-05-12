import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './dashboard/cards/cards.component';

import { SearchComponent } from './dashboard/search/search.component';
import { ExitComponent } from './exit/exit.component';

// import { CookiesComponent } from './cookies/cookies.component';
// import { DashboardComponent } from "./pages/dashboard/dashboard.component";
// import { RegisterComponent } from './pages/register/register.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { CookiesComponent } from './cookies/cookies.component';
// import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';
// import { LoginComponent } from './pages/login/login.component';
// import { ManagementComponent } from "./pages/management/management.component";
// import { PrivacyComponent } from './privacy/privacy.component';
// import { Register2Component } from './pages/register2/register2.component';
// import { Register3Component } from './pages/register3/register3.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsComponent,
    SearchComponent,
    ExitComponent,
    // CookiesComponent,
    // DashboardComponent,
    // RegisterComponent,
    // Register2Component,
    // Register3Component,
    // UserProfileComponent,
    // EditUserprofileComponent,
    // LoginComponent,
    // ManagementComponent,
    // PrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
