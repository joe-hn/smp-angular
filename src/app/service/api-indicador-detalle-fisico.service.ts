import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { _global } from "../_global";

@Injectable({
  providedIn: "root",
})
export class ApiIndicadorDetalleFisicoService {
  url: string = _global.url + "indicadordetallefisico/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      token: localStorage.getItem("_tk"),
    }),
  };

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  GetValidacionIndicador(poaId, operacionId): Observable<any> {
    return this.http
      .get(
        this.url + "validar/indicador/" + poaId + "/" + operacionId,
        this.httpOptions
      )
      .pipe(map(this.extractData));
  }

  GetPoaOperacion(poa, operacion): Observable<any> {
    return this.http
      .get(this.url + "operacion/" + poa + "/" + operacion, this.httpOptions)
      .pipe(map(this.extractData));
  }

  Post(modelo): Observable<any> {
    return this.http
      .post<any>(this.url, JSON.stringify(modelo), this.httpOptions)
      .pipe();
  }

  editarProyeccion(modelo): Observable<any> {
    return this.http.patch(this.url + 'editarproyeccion/0', JSON.stringify(modelo), this.httpOptions).pipe();
  }

  editarEjecucion(modelo): Observable<any> {
    return this.http.patch(this.url + 'editarejecucion/' + modelo.ID, JSON.stringify(modelo), this.httpOptions).pipe();
  }

  // GetId(id): Observable<any> {
  //   return this.http.get(this.url + id, this.httpOptions).pipe(map(this.extractData));
  // }

  // GetTipocargoId(id): Observable<any> {
  //   return this.http.get(this.url + 'tipocargo/' + id, this.httpOptions).pipe(map(this.extractData));
  // }

  // Post(modelo): Observable<any> {
  //   return this.http.post<any>(this.url, JSON.stringify(modelo), this.httpOptions).pipe();
  // }

  // Patch(id, modelo): Observable<any> {
  //   return this.http.patch(this.url + id, JSON.stringify(modelo), this.httpOptions).pipe();
  // }

  // Delete(id, usr): Observable<any> {
  //   return this.http.delete(this.url + id + "/" + usr, this.httpOptions).pipe();
  // }
}
