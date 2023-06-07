import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, map } from 'rxjs';
import { tap } from 'rxjs/operators';


interface LoginResponse {
  access_token: string;
  token: string;
}

interface LicenseResponse {
  access_token: string;
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = 'http://127.0.0.1:8000';
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
      tap(response => sessionStorage.setItem('access_token', response.access_token))
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
  /// endpoint licencias
  public addLicense(dataAddLicense:any ): Observable<LicenseResponse> {
    return this.http.post<LicenseResponse>(`${this.apiUrl}/api/Licencia/Add`, {dataAddLicense})
  }

  public getLicence (): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/api/Licencia`)
  }

  /// endpoint sustancias
  public getSubstance (): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/api/Sustancia`)
  }




}
function jwt_decode(token: string | null) {
  throw new Error('Function not implemented.');
}

