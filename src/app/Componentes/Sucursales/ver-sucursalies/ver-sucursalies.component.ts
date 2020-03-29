import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-sucursalies',
  templateUrl: './ver-sucursalies.component.html',
  styleUrls: ['./ver-sucursalies.component.scss']
})
export class VerSucursaliesComponent implements OnInit {
  public Sucursales: any = [];

  trustedUser= "admin";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
    this.GetSucursal();
  }
  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }
  GetSucursal(){
    this.APIServices.GetSucursal().subscribe((data: {}) => {
        this.Sucursales = data;
        console.log(this.Sucursales);
    })
    }


}
 