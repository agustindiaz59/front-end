import { Component } from '@angular/core';
import { Service1Service } from 'src/app/common/service1.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

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
