import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
//importar componentes de la aplicacion
import { AppComponent } from '../app.component';

const routes: Routes = [
  {path:"inicio", component: AppComponent}
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
