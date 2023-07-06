import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { paises } from '../interfaces/paises';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private apiUrl2 = 'https://localhost:5002';
  private appUrl2 = environment.apiURL
  

  constructor(
    private http: HttpClient, 
  ) { }

  public getPais(): Observable<any> {
    return this.http.get<any>(`${this.appUrl2}/api/Pais`)
  }

  getPaisH(): Observable<paises[]> {

    const token = localStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
    return this.http.get<paises[]>(`${this.appUrl2}/api/Pais` , {headers: headers} )
  }


}
