import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiPoaActividadService {
  url: string = _global.url + 'poaactividad/';

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

  Get(): Observable<any> {
    return this.http.get(this.url, this.httpOptions).pipe(map(this.extractData));
  }

  GetProducto(id, poaid, operacionid): Observable<any> {
    return this.http.get(this.url + 'producto/' + id + '/' + poaid + '/' + operacionid, this.httpOptions).pipe(map(this.extractData));
  }

  GetOperacion(id): Observable<any> {
    return this.http.get(this.url + 'operacion/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  GetPoa(id): Observable<any> {
    return this.http.get(this.url + 'poa/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  GetId(id, operacionid): Observable<any> {
    return this.http.get(this.url + id + '/' + operacionid, this.httpOptions).pipe(map(this.extractData));
  }

  GetMaxCount(id, poaid): Observable<any> {
    return this.http.get(this.url + 'maxc/' + id + '/' + poaid, this.httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  Patch(id, modelo): Observable<any> {
    return this.http.patch(this.url + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  Delete(id, usr): Observable<any> {
    return this.http.delete(this.url + id + "/" + usr, this.httpOptions).pipe();
  }

}
