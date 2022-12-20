import { Component } from '@angular/core';
import { Service1Service } from 'src/app/common/service1.service';

@Component({
  selector: 'app-aptitudes',
  templateUrl: './aptitudes.component.html',
  styleUrls: ['./aptitudes.component.css']
})
export class AptitudesComponent {

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
