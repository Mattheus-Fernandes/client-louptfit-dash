import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { take } from 'rxjs';
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
    this._authService.user$.pipe(take(1))
      .subscribe((user: IUser) => this.user = user)
  }

}
