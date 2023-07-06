import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Notification } from '../interfaces/notification';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  private api = '/api/Notificacion';
  private appUrl = environment.apiURL

  constructor(
    private http: HttpClient
  ) { }

  listNotify(): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.appUrl}/api/Notificacion`)
    
  }
  addNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.appUrl}/api/Notificacion/Add`, notification);
  }
                  //app es el enviroment y url en API
  updateNotification(id: number, notification: Notification): Observable<void> {
    return this.http.put<void>(`${this.appUrl}${this.api}${id}`, notification);
  }
}
