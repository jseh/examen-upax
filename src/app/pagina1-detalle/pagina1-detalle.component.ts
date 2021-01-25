import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogoActualizarComponent } from '../dialogo-actualizar/dialogo-actualizar.component';


@Component({
  templateUrl: './pagina1-detalle.component.html',
  styleUrls: ['./pagina1-detalle.component.scss']
})
export class Pagina1DetalleComponent implements OnInit {

  constructor(
    private location: Location,
    private matDialog: MatDialog
    ) { }

  ngOnInit(): void {
    
  }

  back(): void {
    this.location.back()
  }

  abrirDialogo(){
    
    const dialogConfig = new MatDialogConfig();

    let dialogRef = this.matDialog.open(DialogoActualizarComponent, dialogConfig);
    
    dialogRef.afterClosed().subscribe(v => {
      console.log(`El dialogo envio: ${v}`); 
      this.back();
    });

  }

}
