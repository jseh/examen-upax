import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  nombre: string = "jose";

  api: string = `https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/${this.nombre}`;
  api2: string = `https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/${this.nombre}`;

  constructor(
    private http: HttpClient
  ) { }


  obtenerEmpleados(): Observable<any> {
    return this.http.get(this.api);
  }


  obtenerEmpleadoDeGrupo(id: any): Observable<any> {

    // const params = new HttpParams();

    // params.set('id', id.toString());
    return this.http.get(this.api2 + `/getByGroup?id=${id}`);
    // return this.http.get(this.api + "/getByGroup?", {params: params});
  }



}
