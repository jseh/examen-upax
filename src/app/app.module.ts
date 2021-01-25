import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina1DetalleComponent } from './pagina1-detalle/pagina1-detalle.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogoActualizarComponent } from './dialogo-actualizar/dialogo-actualizar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GruposComponent } from './grupos/grupos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina1DetalleComponent,
    DialogoActualizarComponent,
    GruposComponent,
    EmpleadosComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DragDropModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
