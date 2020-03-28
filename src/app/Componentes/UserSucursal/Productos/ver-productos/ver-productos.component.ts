import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.scss']
})
export class VerProductosComponent implements OnInit {
  public Productos: any = [];
  trustedUser= "Sucursal";
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
