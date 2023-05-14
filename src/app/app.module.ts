import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './dashboard/cards/cards.component';

import { SearchComponent } from './dashboard/search/search.component';
import { FilterComponent } from './dashboard/filter/filter.component';
import { YearComponent } from './dashboard/filter/year/year.component';
import { CourseComponent } from './dashboard/filter/course/course.component';

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
    FilterComponent,
    YearComponent,
    CourseComponent,
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
