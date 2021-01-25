import { Component, OnDestroy, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { GruposService } from '../_servicios/grupos.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss']
})
export class GruposComponent implements OnInit, OnDestroy {


  grupos = [];

  separados = [];

  gruposSeleccionados = [];



  constructor(private gS: GruposService) { }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    this.gS.obtenerGrupos().subscribe( datos => {
      this.grupos = datos.data.groups;
    });
  }


  eliminar(i: number){
  
    const result = [...this.separados.slice(0, i), ...this.separados.slice(i + 1)];

    this.separados = result;
    console.log(i);
    
  }

  drop(event: CdkDragDrop<string[]>) {

    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

    } else {



      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);

      this.gS.obtenerEmpleadoDeGrupo(this.separados[event.currentIndex].id).subscribe( 
        datos => {
          console.log(datos.data.employees);     

          this.separados[event.currentIndex]['empleados'] = datos.data.employees

        },
        (error: HttpErrorResponse) => {
          console.log('estado:', error.status)
        }
      );

    }
  }

}
