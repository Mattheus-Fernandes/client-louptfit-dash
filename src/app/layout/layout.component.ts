import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { filter, Subscription, take } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  user: IUser = {} as IUser

  constructor(
    private readonly _authService: AuthService
  ) { }

  ngOnInit() {
    this._authService.idUser$.subscribe(res => console.log(res))
  }

}
