import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from '../interfaces/user.interface';
import { Observable, Subject, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  id!: number | null
  private subscription!: Subscription

  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getIdUser()
  }

  getIdUser() {
    this.subscription = this.authService.idUser$.subscribe(idUser => this.id = idUser)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
