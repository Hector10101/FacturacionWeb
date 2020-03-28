import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-empleados-alma',
  templateUrl: './ver-empleados-alma.component.html',
  styleUrls: ['./ver-empleados-alma.component.scss']
})
export class VerEmpleadosAlmaComponent implements OnInit {
  public Empleados: any = [];


  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
      this.Goto('Login'); 
    }
    this.GetEmpleado();
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  GetEmpleado(){
    this.APIServices.GetEmpleado().subscribe((data: {}) => {
        this.Empleados = data;
        console.log(this.Empleados);
    })
    }

}
 