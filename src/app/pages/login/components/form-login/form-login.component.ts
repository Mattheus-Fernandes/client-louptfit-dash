import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private readonly _router: Router,
    private readonly _loginService: LoginService,
    private readonly _authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    const username = this.loginForm.get("username")?.value
    const password = this.loginForm.get("password")?.value

    this._loginService.loginUser( username, password).subscribe(
      {
        next: (user: IUser) => {

          this._authService.setUser(user)

          this._router.navigate(['dashboard'])

        },
        error: (error) => {
          console.error(error)
        }
      }
    )
  }

}
