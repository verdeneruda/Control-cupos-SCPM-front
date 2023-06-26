import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../interfaces/notification';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private api = '/api/Notificacion';
  private apiUrl2 = 'https://localhost:5002';

  constructor(
    private http: HttpClient
  ) { }

  listNotify(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.apiUrl2}/api/Notificacion`)
    
  }
  addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.apiUrl2}/api/Notificacion/Add`, notification);
  }
                  //app es el enviroment y url en API
  updateNotification(id: number, notification: Notification): Observable<void> {
    return this.http.put<void>(`${this.apiUrl2}${this.api}${id}`, notification);
  }
}
