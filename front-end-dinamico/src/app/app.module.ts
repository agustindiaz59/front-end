import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado/encabezado.component';
import { AcercaDeComponent } from './acerca-de/acerca-de/acerca-de.component';
import { EducacionComponent } from './educacion/educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos/proyectos.component';
import { AptitudesComponent } from './aptitudes/aptitudes/aptitudes.component';
import { NavegacionComponent } from './navegacion/navegacion.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    EducacionComponent,
    ProyectosComponent,
    AptitudesComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
