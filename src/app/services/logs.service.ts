import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LogsService {

  private apiUrl2 = 'https://localhost:5002';
  private appUrl = environment.apiURL

  constructor(
    private http: HttpClient, 
  ) { }


      /// endpoint sustancias
      public getListLogs (): Observable<any> {
        return this.http.get<any>(`${this.appUrl}/api/Notificacion`)
      }
}
