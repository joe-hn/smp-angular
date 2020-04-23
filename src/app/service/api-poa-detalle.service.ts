import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiPoaDetalleService {
  url: string = _global.url + 'poadetalle/';

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

  GetPoaActividad(POA_ID, ACTIVIDAD_ID): Observable<any> {
    return this.http.get(this.url + 'poa/' + POA_ID + '/' + ACTIVIDAD_ID, this.httpOptions).pipe(map(this.extractData));
  }

  GetActividadProducto(POA_ID): Observable<any> {
    return this.http.get(this.url + 'actividadproducto/' + POA_ID, this.httpOptions).pipe(map(this.extractData));
  }

  GetPoaActividadEjecucion(POA_ID, MES): Observable<any> {
    return this.http.get(this.url + 'actividadejecucion/' + POA_ID + '/' + MES, this.httpOptions).pipe(map(this.extractData));
  }

  GetPoa(id): Observable<any> {
    return this.http.get(this.url + 'anio/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  GetId(id): Observable<any> {
    return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    return this.http.post<any>(this.url, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  editarProyeccion(modelo): Observable<any> {
    return this.http.patch(this.url + 'editarproyeccion/0', JSON.stringify(modelo), this.httpOptions).pipe();
  }

  editarEjecucion(modelo): Observable<any> {
    return this.http.patch(this.url + 'editarejecucion/' + modelo.ID, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ActuaizarPoaProyeccion(poaid, modelo): Observable<any> {
    return this.http.patch(this.url + 'actualizarpoaproyecccion/' + poaid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  ActuaizarPoaEjecucion(poaid, modelo): Observable<any> {
    return this.http.patch(this.url + 'actualizarpoaejecucion/' + poaid, JSON.stringify(modelo), this.httpOptions).pipe();
  }

}
