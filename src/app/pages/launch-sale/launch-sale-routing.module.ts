import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchSaleComponent } from './launch-sale.component';

const routes: Routes = [
    {
        path: '',
        component: LaunchSaleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LaunchSaleRoutingModule { }