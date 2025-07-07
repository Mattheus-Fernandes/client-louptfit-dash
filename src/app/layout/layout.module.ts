import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../components/header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { UserLoggedModule } from './user-logged/user-logged.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, HeaderModule, LayoutRoutingModule, UserLoggedModule],
    exports: [LayoutComponent]
})
export class LayoutModule { }