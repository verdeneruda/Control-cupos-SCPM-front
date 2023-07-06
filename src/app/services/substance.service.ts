import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, map,  } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { Substance } from '../interfaces/substance'
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class SubstanceService {

  private appUrl = environment.apiURL
  private _refresh$ = new Subject<void>();

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }

  get refresh$(){
    return this._refresh$;
  }

  /// endpoint sustancias
  public getSubstance (): Observable<Substance[]> {
    return this.http.get<Substance[]>(`${this.appUrl}/api/Sustancia`)
  }

  public getSubstanceId (id:any): Observable<any> {
    return this.http.get<Substance>(`${this.appUrl}/api/Sustancia/`+id)
  }

  public addSubstance2(sustancia1:string, subpartida:number, tipo:string, descripcion:string ) {
    return this.http.post(`${this.appUrl}/api/Sustancia/Add`, 
      { 
        sustancia1, subpartida, tipo, descripcion 
      }, {headers: {'Content-Type': 'application/json'}}
    )
  };
  public addSubstance(addSustancia : any) {
    return this.http.post(`${this.appUrl}/api/Sustancia/Add`, 
      { 
        sustancia1:addSustancia.sustancia1, 
        subpartida:addSustancia.subpartida, 
        tipo:addSustancia.tipo, 
        descripcion:addSustancia.descripcion,
        usuarioCreacion:addSustancia.usuarioCreacion
      }, {headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(()=> {
        this._refresh$.next();
      })
    )
  };

  updateSubstance(id: number, substance: Substance): Observable<void> {
    return this.http.post<void>(`${this.appUrl}/api/Sustancia/Edit`, substance, {headers: {'Content-Type': 'application/json'}});
  }
  
  public editSubstance(editSustancia : Substance) {
    return this.http.post(`${this.appUrl}/api/Sustancia/Edit`, 
      { 
        id:editSustancia.id,
        sustancia1:editSustancia.sustancia1, 
        subpartida:editSustancia.subpartida, 
        tipo:editSustancia.tipo, 
        descripcion:editSustancia.descripcion
      }, {headers: {'Content-Type': 'application/json'}}
    )
  }
}
