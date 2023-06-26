import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl2 = 'https://localhost:5002';

  constructor(
    private http: HttpClient, 
  ) { }

    /// endpoint Usuarios
    public getListUsers (): Observable<any> {
      return this.http.get<any>(`${this.apiUrl2}/api/Usuario`)
    }

}
