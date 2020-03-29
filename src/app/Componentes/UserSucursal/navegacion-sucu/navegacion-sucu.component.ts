import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-navegacion-sucu',
  templateUrl: './navegacion-sucu.component.html',
  styleUrls: ['./navegacion-sucu.component.scss']
})
export class NavegacionSucuComponent implements OnInit {

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

  HomeProducto(){
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
      this.Goto('HomeProductos'); 
  }
  HomeEmpleado(){
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
      this.Goto('HomeEmpleados'); 
  }
  HomeFacturar(){
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
      this.Goto('HomeFacturar'); 
  }
}
