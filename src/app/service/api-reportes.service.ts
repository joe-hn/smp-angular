import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiReportesService {

  url: string = _global.url + 'reportes/';

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

  GetReporteDireccion(modelo): Observable<any> {    
    return this.http.post<any>(this.url + 'direccion/acumulado', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

  GetReporteDireccionRiesgo(modelo): Observable<any> {    
    return this.http.post<any>(this.url + 'direccion/acumulado/riesgo', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

  GetReporteDireccionActividad(modelo): Observable<any> {    
    return this.http.post<any>(this.url + '/direccion/acumulado/actividad', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

  GetReporteDireccionComparativoEjecucion(modelo): Observable<any> {    
    return this.http.post<any>(this.url + '/direccion/comparativo/ejecucion', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

  GetReporteObjetoGasto(modelo): Observable<any> {    
    return this.http.post<any>(this.url + '/direccion/objetogasto', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

}
