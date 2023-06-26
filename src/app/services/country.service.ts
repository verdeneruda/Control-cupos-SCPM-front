import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  
  private apiUrl2 = 'https://localhost:5002';

  constructor(
    private http: HttpClient, 
  ) { }

  public getPais(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/api/Pais`)
  }


}
