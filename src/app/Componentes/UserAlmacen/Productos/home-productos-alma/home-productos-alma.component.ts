import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-productos-alma',
  templateUrl: './home-productos-alma.component.html',
  styleUrls: ['./home-productos-alma.component.scss']
})
export class HomeProductosAlmaComponent implements OnInit {

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
