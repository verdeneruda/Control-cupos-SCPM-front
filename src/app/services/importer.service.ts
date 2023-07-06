import { Injectable } from '@angular/core';
import { environment } from '../environments/environments';
import { Observable, Subject, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Importer } from '../interfaces/importer';

@Injectable({
  providedIn: 'root'
})
export class ImporterService {

  private appUrl = environment.apiURL

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }



  updateImporter(id: number, importer: Importer): Observable<void> {
    return this.http.post<void>(`${this.appUrl}/api/Importador/Edit`, importer, {headers: {'Content-Type': 'application/json'}});
  }

  public getImporterId (id:any): Observable<any> {
    return this.http.get<Importer>(`${this.appUrl}/api/Importador/`+id, {headers: {'Content-Type': 'application/json'}})
  }

  public addImporter(addImporter : any) {
    return this.http.post(`${this.appUrl}/api/Importador/Add`, 
      { 
        nombreImportador:addImporter.nombreImportador, 
        tipoImportador:addImporter.tipoImportador, 
        estado:addImporter.estado, 
        usuarioCreacion:addImporter.usuarioCreacion
      }, {headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(()=> {

      })
    )
  };

  public getImporter (): Observable<Importer[]> {
    return this.http.get<Importer[]>(`${this.appUrl}/api/Importador`)
  }


}
