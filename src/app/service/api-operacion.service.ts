import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiOperacionService {
  url: string = _global.url + 'operacion/';

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

  GetPrograma(id): Observable<any> {    
    return this.http.get(this.url + 'programa/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {    
    return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
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

  ReporteOperacion(): Observable<any> {
    return this.http.get(this.url + 'reporte/operacion/0', this.httpOptions).pipe(map(this.extractData));
  }

  ReporteOperacionEstructura(id): Observable<any> {
    return this.http.get(this.url + 'reporte/operacion/estructura/' + id, this.httpOptions).pipe(map(this.extractData));
  }

}
