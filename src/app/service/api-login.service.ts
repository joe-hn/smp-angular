import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  url: string = _global.url + 'usuario/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('_tk')
    })
  }

  constructor(
    private http: HttpClient
  ) { }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  Login(modelo): Observable<any> {
    console.log('-- MODELO SERVICIO --', modelo);
    console.log('-- URL --', this.url + 'login');

    const httpOpt = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post<any>(this.url + 'login', JSON.stringify(modelo), httpOpt).pipe(catchError(error => { return this.errorHandler(error) }));
  }

  usuarioId(id): Observable<any> {
    return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error.message || "Server Error");
  }

}
