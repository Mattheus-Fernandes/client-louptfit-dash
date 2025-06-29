import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderModule } from '../components/header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';

@NgModule({
    declarations: [LayoutComponent],
    imports: [CommonModule, HeaderModule, LayoutRoutingModule],
    exports: [LayoutComponent]
})
export class LayoutModule { }