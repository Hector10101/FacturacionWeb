import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-mofi-usuarios',
  templateUrl: './mofi-usuarios.component.html',
  styleUrls: ['./mofi-usuarios.component.scss']
})
export class MofiUsuariosComponent implements OnInit {

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
