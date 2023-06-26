import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environments';


interface LoginResponse {
  access_token: string;
  token: string;
  idRole: string
  full_name: string
}


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl:string = environment.endpoint
  private apiUrl2 = 'https://localhost:5002';

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }



/* public login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => localStorage.setItem('token', response.token))
    );
  }*/

  public login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, { username, password }).pipe(
      tap(response => sessionStorage.setItem('access_token', response.access_token)
      ),tap(response => sessionStorage.setItem('isRole', response.idRole)
      ),tap(response => sessionStorage.setItem('fullName', response.full_name)
      )
      
    );
  }


  isLoggedIn() {
    const token = sessionStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  public logout(): void {
    sessionStorage.removeItem('access_token');
  }

  public isAuthenticated(): boolean {
    return !!sessionStorage.getItem('access_token');
  }

  public isRole(){
    return sessionStorage.getItem('isRole')
  
  }

  public fullName(){
    return sessionStorage.getItem('fullName')
  
  }



}
function jwt_decode(token: string | null) {
  throw new Error('Function not implemented.');
}



