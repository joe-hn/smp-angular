import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiPeModificacionService {
  url: string = _global.url + 'pe/';

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

  PoaProyeccion(poaid, modelo): Observable<any>{
    return this.http.patch(this.url + 'poa/proyeccion/' + poaid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  PoaEjecucionReal(poaid, modelo): Observable<any>{
    return this.http.patch(this.url + 'poa/ejecucion/real/' + poaid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ActividadProyeccion(actividadid, modelo): Observable<any>{
    return this.http.patch(this.url + 'actividad/proyeccion/' + actividadid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  PoaProyeccionReal(poaid, modelo): Observable<any>{
    return this.http.patch(this.url + 'poa/proyeccion/real/' + poaid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ActividadEjecucion(actividadid, modelo): Observable<any>{
    return this.http.patch(this.url + 'actividad/ejecucion/' + actividadid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

}
