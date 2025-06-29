import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NavItemComponent } from './components/nav-item/nav-item.component';

@NgModule({
    declarations: [HeaderComponent, NavItemComponent],
    imports: [CommonModule],
    exports: [HeaderComponent]
})
export class HeaderModule { }