import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchSaleComponent } from './launch-sale.component';
import { LaunchSaleRoutingModule } from './launch-sale-routing.module';

@NgModule({
    declarations: [
        LaunchSaleComponent
    ],
    imports: [
        CommonModule,
        LaunchSaleRoutingModule
    ],
    exports: [
        LaunchSaleComponent
    ]
})
export class LaunchSaleModule { }