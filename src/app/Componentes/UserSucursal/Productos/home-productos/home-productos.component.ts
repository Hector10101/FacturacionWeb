import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-productos',
  templateUrl: './home-productos.component.html',
  styleUrls: ['./home-productos.component.scss']
})
export class HomeProductosComponent implements OnInit {

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
