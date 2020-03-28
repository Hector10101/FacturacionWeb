import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-productos-alma',
  templateUrl: './ver-productos-alma.component.html',
  styleUrls: ['./ver-productos-alma.component.scss']
})
export class VerProductosAlmaComponent implements OnInit {
  public Productos: any = [];
  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }
  ngOnInit(): void {
    if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
      this.Goto('Login'); 
    }
    this.GetProducto();
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }
  GetProducto(){
    this.APIServices.GetProducto().subscribe((data: {}) => {
        this.Productos = data;
        console.log(this.Productos);
    })
    }
}
