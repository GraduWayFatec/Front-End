import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookiesComponent } from './cookies/cookies.component';

//IMPORTS DOS COMPONENTES DO PORTAL

const routes: Routes = [

  // -----ROTAS DO PORTAL --------
  { path: 'cookies', component: CookiesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
