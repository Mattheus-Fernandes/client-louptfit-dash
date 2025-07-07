import { Component, OnDestroy, OnInit } from '@angular/core';
import { IUser } from '../interfaces/user.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {

  private subscription!: Subscription
  user: IUser = {} as IUser

  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
