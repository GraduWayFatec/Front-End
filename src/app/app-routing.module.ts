import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register3Component } from './pages/register3/register3.component';


//IMPORTS DOS COMPONENTES DO PORTAL




const routes: Routes = [

  // -----ROTAS DO RORTAL --------
  // { path: '', component: LoginComponent },
  { path: 'register3', component: Register3Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }