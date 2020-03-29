import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-home-usuarios',
  templateUrl: './home-usuarios.component.html',
  styleUrls: ['./home-usuarios.component.scss']
})
export class HomeUsuariosComponent implements OnInit {

  trustedUser= "admin";
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
