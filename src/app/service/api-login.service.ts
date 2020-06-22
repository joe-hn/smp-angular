import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { } from 'rxjs/operators';


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
    return this.http.post<any>(this.url + 'login', JSON.stringify(modelo), this.httpOptions).pipe(catchError(this.errorHandler));
  }

  usuarioId(id): Observable<any> {
    return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server Error");
  }

}
