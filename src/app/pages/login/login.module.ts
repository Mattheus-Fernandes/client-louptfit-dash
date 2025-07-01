import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message.module';

@NgModule({
    declarations: [LoginComponent, FormLoginComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        ErrorMessageModule
    ],
    exports: [LoginComponent]
})
export class LoginModule { }