import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, Subject, map,  } from 'rxjs';
import {  tap } from 'rxjs/operators';
import { substance } from '../interfaces/substance'

@Injectable({
  providedIn: 'root'
})
export class SubstanceService {

  private apiUrl2 = 'https://localhost:5002';
  private _refresh$ = new Subject<void>();

  constructor(
    private http: HttpClient, 
    private jwtHelper: JwtHelperService
  ) { }

  get refresh$(){
    return this._refresh$;
  }

  /// endpoint sustancias
  public getSubstance (): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/api/Sustancia`)
  }

  public getSubstanceId (id:any): Observable<any> {
    return this.http.get<substance>(`${this.apiUrl2}/api/Sustancia/`+id)
  }

  public addSubstance2(sustancia1:string, subpartida:number, tipo:string, descripcion:string ) {
    return this.http.post(`${this.apiUrl2}/api/Sustancia/Add`, 
      { 
        sustancia1, subpartida, tipo, descripcion 
      }, {headers: {'Content-Type': 'application/json'}}
    )
  };
  public addSubstance(addSustancia : any) {
    return this.http.post(`${this.apiUrl2}/api/Sustancia/Add`, 
      { 
        sustancia1:addSustancia.sustancia1, 
        subpartida:addSustancia.subpartida, 
        tipo:addSustancia.tipo, 
        descripcion:addSustancia.descripcion
      }, {headers: {'Content-Type': 'application/json'}}
    ).pipe(
      tap(()=> {
        this._refresh$.next();
      })
    )
  };
  
  public editSubstance(editSustancia : substance) {
    return this.http.post(`${this.apiUrl2}/api/Sustancia/Edit`, 
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
