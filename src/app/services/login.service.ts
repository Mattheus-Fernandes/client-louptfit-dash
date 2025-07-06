import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly _loginUrl = 'http://localhost:8080/user/login'

  constructor(
    private readonly _http: HttpClient
  ) { }

  loginUser(username: string, password: string): Observable<IUser> {
    return this._http.post<IUser>(this._loginUrl, { username, password });
  }
}
