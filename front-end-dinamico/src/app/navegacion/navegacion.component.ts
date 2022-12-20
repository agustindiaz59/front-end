import { Component } from '@angular/core';
import { Service1Service } from '../common/service1.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent {

  miPortafolio: any ;

  constructor( private common:Service1Service, ){}

  ngOnInit():void{
    this.common.obtenerDatos().subscribe(data =>
      {
        console.log(data);
        this.miPortafolio = data;
      }
      
    );
  }

}
