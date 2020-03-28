import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-empleados',
  templateUrl: './home-empleados.component.html',
  styleUrls: ['./home-empleados.component.scss']
})
export class HomeEmpleadosComponent implements OnInit {

  trustedUser= "Sucursal";
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
