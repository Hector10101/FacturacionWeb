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
  public Productos: any = [];
  public ID : string;
  public Nombre : string;
  public Descricipcion : string;
  public Cantidad : number;
  public FechaCaducidad: string;
  public PrecioUnitario: number;
  public PrecioTotal: number;
  public seleccionado: string;
  public cantidadSelected:string;
  public preciototalFact: number;
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

  GetProductosSelected(){
    for(let producto of this.Productos){
      if(this.seleccionado == producto.id){
        this.ID = producto.id;
        this.Nombre = producto.nombre;
        this.Descricipcion = producto.descripcion;
        this.Cantidad = producto.cantidad;
        this.FechaCaducidad = producto.fecha_caducidad;
        this.PrecioUnitario = producto.precioUnitario;
        this.PrecioTotal = producto.precioTotal;
     
      }
    } 
  }
  

  GetProducto(){
    this.APIServices.GetProducto().subscribe((data: {}) => {
        this.Productos = data;
        console.log(this.Productos);
    })
  }

  SetCantidad(newCant: HTMLInputElement){
    this.cantidadSelected= newCant.value;
    this.preciototalFact=  parseInt(this.cantidadSelected) * this.PrecioUnitario;
  }

  PostFactura() {
    
    //
  }
 
}
