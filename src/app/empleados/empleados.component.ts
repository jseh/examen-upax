import { HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EmpleadosService } from '../_servicios/empleados.service';

@Component({
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit,  AfterViewInit  {

  arr: any[] = [];
  aBuscar: string = "";

  fuente: any[] = [];
  nuevoEmpleadoForm: FormGroup;

  constructor(private eS: EmpleadosService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.nuevoEmpleadoForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(30)]],
      apellido: ['', [Validators.required, Validators.maxLength(30)]],
      fecha: ['', [Validators.required, Validators.pattern("((?:19|20)\\d\\d)/(0?[1-9]|1[012])/([12][0-9]|3[01]|0?[1-9])")]],
    });

  }

  displayedColumns: string[] = ['id', 'name', 'last_name', 'birthday'];
  dataSource = new MatTableDataSource<Empleado>();

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {

    // this.obtenerDatos();
    // this.reasignar();

    this.eS.obtenerEmpleados().subscribe(
      (datos) => {
        // this.dataSource.data = datos.data.employees;
        this.fuente = datos.data.employees;

        this.dataSource.data = this.fuente;
      }
    );
    
   

    this.paginator._intl.itemsPerPageLabel = 'Elementos por pagina';
    this.dataSource.paginator = this.paginator;   
  }

  limpiar(){

    this.actualizar();
    this.aBuscar = "";
  }


  buscar(){


    // let obj = this.fuente.find(o => o.name === this.aBuscar);
    let objs = this.fuente.filter(x => x.name.includes(this.aBuscar));
    console.log(objs);

    // this.arr.push(obj);
    // this.dataSource.data = this.arr;
    this.dataSource.data = objs;

  }

  subir(){

    // si es valido
    if(!this.nuevoEmpleadoForm.invalid){
      
      
      this.eS.enviarEmpleado(this.nuevoEmpleadoForm.value).subscribe(
        (datos) => {
          console.log("enviado correctamente");
          console.log(datos);
          
          this.nuevoEmpleadoForm.reset();

          this.actualizar();
        },
        (error: HttpErrorResponse) => {
          console.log("hubo un problema");
        }
      );
      


    }


  }

  actualizar(){

    this.eS.obtenerEmpleados().subscribe(
      (datos) => {
        this.dataSource.data = datos.data.employees;
      }
    );

  }

 

  obtenerDatos(){

    this.eS.obtenerEmpleados().subscribe(
      (datos) => {
        // this.dataSource.data = datos.data.employees;
        this.fuente = datos.data.employees;
      }
    );

  }

  reasignar(){
    this.dataSource.data = this.fuente;
  }


}





export interface Empleado {
  id: number;
  name: string;
  last_name: string;
  birthday: number;
}
























