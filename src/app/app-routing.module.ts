import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';


//IMPORTS DOS COMPONENTES DO PORTAL




const routes: Routes = [

  // -----ROTAS DO RORTAL --------
  { path: 'privacy', component: PrivacyComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }