import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from '../interfaces/supplier';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private appUrl = environment.apiURL

  constructor(private http: HttpClient) { }

  public addProvider(provider:any ): Observable<Supplier> {
    return this.http.post<Supplier>(`${this.appUrl}/api/Proveedor/Add`, {provider})
  }

  public getProvider (): Observable<any> {
    return this.http.get<any>(`${this.appUrl}/api/Proveedor`)
  }


}
