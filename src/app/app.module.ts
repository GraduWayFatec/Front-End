import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CardsComponent } from './dashboard/cards/cards.component';

import { SearchComponent } from './dashboard/search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    CardsComponent,
    SearchComponent,
    EditUserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
