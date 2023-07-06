import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environments';
import { Provider } from '../interfaces/provider';

interface LicenseResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})

export class LicenseService {
  private appUrl = environment.apiURL

  constructor(
    private http: HttpClient, 
  ) { }

    /// endpoint licencias
    public addLicense(dataAddLicense:any ): Observable<LicenseResponse> {
      return this.http.post<LicenseResponse>(`${this.appUrl}/api/Licencia/Add`, {dataAddLicense})
    }
  
    public getLicence (): Observable<any> {
      return this.http.get<any>(`${this.appUrl}/api/Licencia`)
    }

    public addProvider(provider:any ): Observable<Provider> {
      return this.http.post<Provider>(`${this.appUrl}/api/Proveedor/Add`, {provider})
    }

    public getProvider (): Observable<any> {
      return this.http.get<any>(`${this.appUrl}/api/Proveedor`)
    }


}
