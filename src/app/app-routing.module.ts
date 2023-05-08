import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Register2Component } from './pages/register2/register2.component';


//IMPORTS DOS COMPONENTES DO PORTAL




const routes: Routes = [

  // -----ROTAS DO RORTAL --------
  // { path: '', component: LoginComponent },
  { path: 'register2', component: Register2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }