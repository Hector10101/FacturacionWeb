import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FacturacionWeb';

  trustedSucursal= "Sucursal";
  sucursalActivo=false;
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
      this.APIServices.setUserLogIn();
      if((this.trustedSucursal ==this.APIServices.getUserLoggedIn())){
        this.sucursalActivo = true;
      }
  }
 

}
