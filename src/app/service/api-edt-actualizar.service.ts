import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiEdtActualizarService {
  url: string = _global.url + 'edt/';

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

  Componente(id, modelo): Observable<any> {    
    return this.http.patch(this.url + 'componente/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  SubComponente(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'sub/componente/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ComponenteIndicador(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'componente/indicador/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  SubComponenteIndicador(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'sub/componente/indicador/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ComponenteIndicadorProducto(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'componente/indicador/producto/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  SubComponenteIndicadorProducto(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'sub/componente/indicador/producto/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ComponenteIndicadorProductoActividad(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'componente/indicador/producto/avtividad/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  SubComponenteIndicadorProductoActividad(id, modelo): Observable<any> {
    return this.http.patch(this.url + 'sub/componente/indicador/producto/avtividad/' + id, JSON.stringify(modelo), this.httpOptions).pipe();
  }

}
