import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-modifi-productos-alma',
  templateUrl: './modifi-productos-alma.component.html',
  styleUrls: ['./modifi-productos-alma.component.scss']
})
export class ModifiProductosAlmaComponent implements OnInit {

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
