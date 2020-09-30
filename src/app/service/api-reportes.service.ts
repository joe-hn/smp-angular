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

  GetReporteDireccionAcumulado(modelo): Observable<any> {    
    return this.http.post<any>(this.url + 'direccion/acumulado', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  

  GetReporteDireccionGlobal(modelo): Observable<any> {    
    return this.http.post<any>(this.url + 'direccion/acumulado/global', JSON.stringify(modelo), this.httpOptions).pipe(map(this.extractData));
  }  
}
