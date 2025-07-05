import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly key: string = "id_user"

  private userSubject = new BehaviorSubject<any | null>(this.getIdFromStorage())

  idUser$: Observable<number | null> = this.userSubject.asObservable()

  private getIdFromStorage(): number | any {
    const idUser = localStorage.getItem(this.key)

    return idUser ? Number(idUser) : null
  }

  setIdUser(idUser: number) {
    localStorage.setItem(this.key, JSON.stringify(idUser))
    this.userSubject.next(idUser)
  }

  clearIdUser() {
    localStorage.removeItem(this.key)
    this.userSubject.next(null)
  }
}
