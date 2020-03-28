import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-facturar-alma',
  templateUrl: './facturar-alma.component.html',
  styleUrls: ['./facturar-alma.component.scss']
})
export class FacturarAlmaComponent implements OnInit {

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
