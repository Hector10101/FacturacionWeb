import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-empleados',
  templateUrl: './ver-empleados.component.html',
  styleUrls: ['./ver-empleados.component.scss']
})
export class VerEmpleadosComponent implements OnInit {
  public Empleados: any = [];


  trustedUser= "Sucursal";
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
 