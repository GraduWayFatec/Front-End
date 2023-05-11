import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ManagementComponent } from "./pages/management/management.component";


const routes: Routes = [
    { path: "dashboard", component: DashboardComponent},
    { path: '', component: DashboardComponent},
    { path: "management", component: ManagementComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{  }