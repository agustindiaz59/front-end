import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

//importar componentes de la aplicacion
import { EncabezadoComponent } from '../encabezado/encabezado/encabezado.component';
import { AcercaDeComponent } from '../acerca-de/acerca-de/acerca-de.component';
import { EducacionComponent } from '../educacion/educacion/educacion.component';
import { AptitudesComponent } from '../aptitudes/aptitudes/aptitudes.component';
import { ProyectosComponent } from '../proyectos/proyectos/proyectos.component';
import { AppComponent } from '../app.component';


//lista de rutas con sus respectivos componentes a mostrar
const routes: Routes = [
  {path:'inicio', component: AppComponent},
  {path:'encabezado', component: EncabezadoComponent},
  {path:'about', component: AcercaDeComponent},
  {path:'educacion', component: EducacionComponent},
  {path:'aptitudes', component: AptitudesComponent},
  {path:'proyectos', component: ProyectosComponent},
  {path:"", redirectTo:'inicio',pathMatch:'full'},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {

}
