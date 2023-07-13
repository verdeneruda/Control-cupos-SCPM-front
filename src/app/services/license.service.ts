import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../environments/environments';
import { Supplier } from '../interfaces/supplier';
import { LicenseAdd } from '../interfaces/license';

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
    public addLicense(dataAddLicense:LicenseAdd ): Observable<LicenseAdd> {
    const token = sessionStorage.getItem('token')
    const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
      console.log('proveedores: '+ dataAddLicense.proveedores)


      return this.http.post<LicenseAdd>(`${this.appUrl}/api/Licencia/Add`, {
        nroExpediente: dataAddLicense.nroExpediente,
        nitEmpresa: dataAddLicense.nitEmpresa,
        importadorId: dataAddLicense.importadorId,
        nroActoAdtvo: dataAddLicense.nroActoAdtvo,
        fechaActoAdtvo: dataAddLicense.fechaActoAdtvo,
        fechaActoAdtvoMod: dataAddLicense.fechaActoAdtvoMod,
        nroActoAdtvoMod: dataAddLicense.nroActoAdtvoMod,
        paisProcedencia: dataAddLicense.paisProcedencia,
        estado: dataAddLicense.estado,
        proveedores: dataAddLicense.proveedores ,
        usuarioCreacion: dataAddLicense.usuarioCreacion,
      } , {headers: headers})
    }

    public addLicense2(dataAddLicense:LicenseAdd ): Observable<LicenseAdd> {
      const token = sessionStorage.getItem('token')
      const headers = new HttpHeaders().set('Authorization',`Bearer ${token}`)
        console.log('info: '+dataAddLicense)
        return this.http.post<LicenseAdd>(`${this.appUrl}/api/Licencia/Add`, { dataAddLicense } , {headers: headers})
      }
  
    public getLicence (): Observable<any> {
      return this.http.get<any>(`${this.appUrl}/api/Licencia`)
    }




}
