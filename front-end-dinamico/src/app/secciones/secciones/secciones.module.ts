import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoComponent } from 'src/app/encabezado/encabezado/encabezado.component';
import { AcercaDeComponent } from 'src/app/acerca-de/acerca-de/acerca-de.component';
import { AptitudesComponent } from 'src/app/aptitudes/aptitudes/aptitudes.component';
import { EducacionComponent } from 'src/app/educacion/educacion/educacion.component';
import { NavegacionComponent } from 'src/app/navegacion/navegacion.component';
import { ProyectosComponent } from 'src/app/proyectos/proyectos/proyectos.component';



@NgModule({
  declarations: [
    EncabezadoComponent,
    AcercaDeComponent,
    AptitudesComponent,
    EducacionComponent,
    NavegacionComponent,
    ProyectosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeccionesModule { }
