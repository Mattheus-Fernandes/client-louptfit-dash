import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: "", redirectTo: "launch-sale", pathMatch: "full"},
            { path: "login", loadChildren: () => import("../pages/login/login.module").then(m => m.LoginModule) },
            { path: "launch-sale", loadChildren: () => import("../pages/launch-sale/launch-sale.module").then(m => m.LaunchSaleModule)}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }