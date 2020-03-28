import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-empleados-alma',
  templateUrl: './home-empleados-alma.component.html',
  styleUrls: ['./home-empleados-alma.component.scss']
})
export class HomeEmpleadosAlmaComponent implements OnInit {

  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }
  ngOnInit(): void {
    if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
      this.Goto('Login'); 
    }
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

}
