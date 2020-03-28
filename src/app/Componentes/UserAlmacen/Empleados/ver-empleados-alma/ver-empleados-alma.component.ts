import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-empleados-alma',
  templateUrl: './ver-empleados-alma.component.html',
  styleUrls: ['./ver-empleados-alma.component.scss']
})
export class VerEmpleadosAlmaComponent implements OnInit {
  public Empleados: any = [];


  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetEmpleado();
  }

  GetEmpleado(){
    this.APIServices.GetEmpleado().subscribe((data: {}) => {
        this.Empleados = data;
        console.log(this.Empleados);
    })
    }

}
 