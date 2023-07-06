import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
  private listRole: string = ''
  private appUrl2 = environment.endpoint
  private appUrl = environment.apiURL
  private apiUrl = '/api/Login/authenticate'

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }




  public login2(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.appUrl2+this.apiUrl)
    return this.http.post<any>(`${this.appUrl2}/login`, { username, password }, {headers: headers})
    .pipe(
      tap(response => sessionStorage.setItem('access_token', response.token)
      ),tap(response => sessionStorage.setItem('isRole', response.listRole)
      ),tap(response => sessionStorage.setItem('fullName', response.full_name)
      )

    );
    
  }

  public login(email: string, password: string): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(this.appUrl+this.apiUrl)
    return this.http.post<any>(`${this.appUrl}/api/Login/authenticate`, { email, password }, {headers: headers})
    .pipe(
      tap(response => sessionStorage.setItem('access_token', response.token)
      ),tap(response => sessionStorage.setItem('isRole', response.login.rolUsuario.id)
      ),tap(response => sessionStorage.setItem('fullName', response.login.usuario.nombres)
      ),tap(response => sessionStorage.setItem('idUser', response.login.usuario.id)
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

  public idUser(){
    return sessionStorage.getItem('idUser')
  }

}
function jwt_decode(token: string | null) {
  throw new Error('Function not implemented.');
}



