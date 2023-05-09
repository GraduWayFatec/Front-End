import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';


//IMPORTS DOS COMPONENTES DO PORTAL




const routes: Routes = [

  // -----ROTAS DO RORTAL --------
  { path: 'user-profile', component: UserProfileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }