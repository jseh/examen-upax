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


  enviarEmpleado(e: any): Observable<any> {

    // const params = new HttpParams();

    return this.http.post(this.api2, { name: e.nombre, last_name: e.apellido, birthday: e.fecha} );
  }



}
