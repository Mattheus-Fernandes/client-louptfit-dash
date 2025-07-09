import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _key: string = "user"

  private userSubject = new BehaviorSubject<IUser | any>(this.getUserFromStorage())

  user$: Observable<IUser> = this.userSubject.asObservable()

  private getUserFromStorage(): IUser | any {
    const user = localStorage.getItem(this._key)

    return user ? JSON.parse(user) : null
  }

  setUser(user: IUser) {
    localStorage.setItem(this._key, JSON.stringify(user))
    this.userSubject.next(user)
  }

  clearIdUser() {
    localStorage.removeItem(this._key)
    this.userSubject.next(null)
  }
}
