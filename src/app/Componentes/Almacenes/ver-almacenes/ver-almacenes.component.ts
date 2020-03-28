import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-almacenes',
  templateUrl: './ver-almacenes.component.html',
  styleUrls: ['./ver-almacenes.component.scss']
})
export class VerAlmacenesComponent implements OnInit {
  public Almacenes: any = [];
  trustedUser= "Almacen";

  constructor(private APIServices: APIservicesService, private router: Router) { }
  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
    this.GetAlmacen();
  }
  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }


  GetAlmacen(){
    this.APIServices.GetAlmacen().subscribe((data: {}) => {
        this.Almacenes = data;
        console.log(this.Almacenes);
    })
    }
}
