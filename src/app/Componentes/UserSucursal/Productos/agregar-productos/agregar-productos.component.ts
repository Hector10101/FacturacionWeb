import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {

  trustedUser= "Sucursal";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  public Productos: any = [];
  precioTotal: number;
  cantidad: number;
  precioUnitario: number;
  ngOnInit(): void {
    if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
      this.Goto('Login'); 
    }
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }
  CantidadTotal(newCantidad: HTMLInputElement, newPrecioUnitario: HTMLInputElement,){
    this.cantidad =  parseInt(newCantidad.value);
    this.precioUnitario =  parseInt(newPrecioUnitario.value);
    this.precioTotal = this.precioUnitario * this.cantidad;
  }
  PostProductos(newNombre: HTMLInputElement,newDescripcion: HTMLInputElement,newCantidad: HTMLInputElement,newFechaCaducidad: HTMLInputElement,newPrecioUnitario: HTMLInputElement, newPrecioTotal: HTMLInputElement) {
    
    const Producto = {
    Nombre: newNombre.value,
    Descripcion: newDescripcion.value,
    Cantidad: newCantidad.value,
    Fecha_caducidad: newFechaCaducidad.value,
    PrecioUnitario: newPrecioUnitario.value,
    PrecioTotal: this.precioTotal,


    };
    this.APIServices.PostProducto(Producto).subscribe((registro: {}) => {
      console.log(registro);
      newNombre.value = '';
      newDescripcion.value = '';
      newCantidad.value = '';
      newFechaCaducidad.value = '';
      newPrecioUnitario.value = '';
      newPrecioTotal.value = '';

    })
  }

}
