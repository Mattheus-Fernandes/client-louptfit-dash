import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoggedComponent } from './user-logged.component';
import { UserRolePipe } from 'src/app/pipes/user-role.pipe';

@NgModule({
  declarations: [UserLoggedComponent, UserRolePipe],
  imports: [CommonModule],
  exports: [UserLoggedComponent]
})
export class UserLoggedModule { }