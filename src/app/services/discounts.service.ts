import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { Discounts } from '../interfaces/discounts';
import { License } from '../interfaces/license';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class DiscountsService {
  private apiUrl2 = 'https://localhost:5002';
  private apiUrl = 'http://localhost:8182/licenses';
  private appUrl2 = environment.apiURL
  private _refresh$ = new Subject<void>;

  constructor(private http: HttpClient) { }

  
  getLicenseDiscount(exp: string, resol: number): Observable<License[]> {
    if (exp) {
      this.apiUrl += '?search_text=' + exp;
    }
    if (resol) {
      this.apiUrl += (exp ? '&' : '?') + 'search_number=' + resol;
    }
    return this.http.get<License[]>(`${this.apiUrl}`).pipe(
      tap(()=> {
        this.apiUrl = 'http://localhost:8182/licenses';
      })
    )
    
  }

}
