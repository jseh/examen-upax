import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';


const routes: Routes = [
  { path: 'carrusel', component: CarruselComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'grupos', component: GruposComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
