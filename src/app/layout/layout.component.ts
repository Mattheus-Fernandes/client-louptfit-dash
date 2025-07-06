import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';
import { Observable, Subject, Subscription, take } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  id!: number | null
  user: IUser = {} as IUser
  role!: number
  private subscription!: Subscription

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService
  ) { }

  ngOnInit(): void {
    this.getIdUser()
    this.getDetailsUser()
  }

  getIdUser() {
    this.subscription = this.authService.idUser$.subscribe(idUser => this.id = idUser)
  }

  getDetailsUser() {
    this.userService.getUserByid(this.id as number).pipe(
      take(1)
    ).subscribe((res: IUser) => this.role = res.role)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
