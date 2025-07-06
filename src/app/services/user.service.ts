import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/user.interface';
import { ListUsers } from '../types/list-users.type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly _searchUrl = "http://localhost:8080/user"

  constructor(
    private readonly _http: HttpClient
  ) { }

  getAllUsers(): Observable<ListUsers> {
    return this._http.get<ListUsers>(this._searchUrl)
  }

  getUserByid(id: number): Observable<IUser>{
    return this._http.get<IUser>(`${this._searchUrl}/${id}`)
  }

  getFilterUsers(query: string, value: string): Observable<IUser>{
    return this._http.get<IUser>(`${this._searchUrl}/?${query}=${value}}`)
  }
  
}
