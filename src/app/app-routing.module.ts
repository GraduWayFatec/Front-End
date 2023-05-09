import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ManagementComponent } from "./pages/management/management.component";


const APP_ROUTES: Routes = [
    { path: "dashboard", component: DashboardComponent},
    { path: '', component: DashboardComponent},
    { path: "management", component: ManagementComponent}
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(APP_ROUTES)],
    exports: [RouterModule]
})

export class AppRoutingModule{
    static routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
}