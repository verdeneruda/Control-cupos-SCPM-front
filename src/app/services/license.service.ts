import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface LicenseResponse {
  access_token: string;
}

@Injectable({
  providedIn: 'root'
})

export class LicenseService {
  private apiUrl2 = 'https://localhost:5002';

  constructor(
    private http: HttpClient, 
  ) { }

    /// endpoint licencias
    public addLicense(dataAddLicense:any ): Observable<LicenseResponse> {
      return this.http.post<LicenseResponse>(`${this.apiUrl2}/api/Licencia/Add`, {dataAddLicense})
    }
  
    public getLicence (): Observable<any> {
      return this.http.get<any>(`${this.apiUrl2}/api/Licencia`)
    }


}
