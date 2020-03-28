import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-modifi-sucursales',
  templateUrl: './modifi-sucursales.component.html',
  styleUrls: ['./modifi-sucursales.component.scss']
})
export class ModifiSucursalesComponent implements OnInit {

  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
  }
  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

}
