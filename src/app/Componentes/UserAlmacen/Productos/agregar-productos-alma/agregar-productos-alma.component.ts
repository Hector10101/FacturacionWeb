import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-agregar-productos-alma',
  templateUrl: './agregar-productos-alma.component.html',
  styleUrls: ['./agregar-productos-alma.component.scss']
})
export class AgregarProductosAlmaComponent implements OnInit {

  constructor(private APIServices: APIservicesService) { }
  public Productos: any = [];
  precioTotal: number;
  cantidad: number;
  precioUnitario: number;
  ngOnInit(): void {
  }
  CantidadTotal(newCantidad: HTMLInputElement, newPrecioUnitario: HTMLInputElement,){
    this.cantidad =  parseInt(newCantidad.value);
    this.precioUnitario =  parseInt(newPrecioUnitario.value);
    this.precioTotal = this.precioUnitario * this.cantidad;
  }
  PostProductos(newNombre: HTMLInputElement,newDescripcion: HTMLInputElement,newCantidad: HTMLInputElement,newFechaCaducidad: HTMLInputElement,newPrecioUnitario: HTMLInputElement, newPrecioTotal: HTMLInputElement) {
    
    const Producto = {
    Nombre: newNombre.value,
    Descripción: newDescripcion.value,
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
