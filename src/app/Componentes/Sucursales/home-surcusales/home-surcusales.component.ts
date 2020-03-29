import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-home-surcusales',
  templateUrl: './home-surcusales.component.html',
  styleUrls: ['./home-surcusales.component.scss']
})
export class HomeSurcusalesComponent implements OnInit {

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
