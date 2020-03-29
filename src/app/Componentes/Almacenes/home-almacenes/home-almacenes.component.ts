import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-home-almacenes',
  templateUrl: './home-almacenes.component.html',
  styleUrls: ['./home-almacenes.component.scss']
})
export class HomeAlmacenesComponent implements OnInit {
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
