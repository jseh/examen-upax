import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarruselComponent } from './carrusel/carrusel.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { GruposComponent } from './grupos/grupos.component';
import { MGuard } from './_guards/mguard';


const routes: Routes = [
  { path: 'carrusel', component: CarruselComponent, canActivate: [MGuard] },
  { path: 'empleados', component: EmpleadosComponent, canActivate: [MGuard] },
  { path: 'grupos', component: GruposComponent, canActivate: [MGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
