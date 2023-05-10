import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserprofileComponent } from './edit-userprofile/edit-userprofile.component';


//IMPORTS DOS COMPONENTES DO PORTAL




const routes: Routes = [

  // -----ROTAS DO RORTAL --------
  { path: 'edit-userprofile', component: EditUserprofileComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }