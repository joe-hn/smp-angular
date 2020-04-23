import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { _global } from '../_global';

@Injectable({
  providedIn: 'root'
})
export class ApiEmpleadoService {
  url: string = _global.url + 'empleado/';

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

  GetId(id): Observable<any> {
    return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
  }

  GetEmpleadoSinUsuario(): Observable<any> {
    return this.http.get(this.url + 'empleadosSinUsuario/0', this.httpOptions).pipe(map(this.extractData));
  }

  GetTipoempleadoId(id): Observable<any> {
    return this.http.get(this.url + 'tipoempleado/' + id, this.httpOptions).pipe(map(this.extractData));
  }

  DireccionCargo(direccionId, cargoId): Observable<any> {
    return this.http.get(this.url + 'direccionCargo/' + direccionId + '/' + cargoId, this.httpOptions).pipe(map(this.extractData));
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
