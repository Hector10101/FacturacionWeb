import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-edi-productos',
  templateUrl: './edi-productos.component.html',
  styleUrls: ['./edi-productos.component.scss']
})
export class EdiProductosComponent implements OnInit {


  public Productos: any = [];
  public ID : string;
  public Nombre : string;
  public Descricipcion : string;
  public Cantidad : number;
  public FechaCaducidad: string;
  public PrecioUnitario: number;
  public PrecioTotal: number;
  public seleccionado: string;
  
  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetProducto();
  }

  CantidadTotal(newCantidad: HTMLInputElement, newPrecioUnitario: HTMLInputElement,){
    this.Cantidad =  parseInt(newCantidad.value);
    this.PrecioUnitario =  parseInt(newPrecioUnitario.value);
    this.PrecioTotal = this.PrecioUnitario * this.Cantidad;
  }

  GetProducto(){
    this.APIServices.GetProducto().subscribe((data: {}) => {
        this.Productos = data;
        console.log(this.Productos);
    })
  }

  GetProductosSelected(){
    for(let producto of this.Productos){
      if(this.seleccionado == producto.id){
        this.ID = producto.id;
        this.Nombre = producto.nombre;
        this.Descricipcion = producto.descripción;
        this.Cantidad = producto.cantidad;
        this.FechaCaducidad = producto.fecha_caducidad;
        this.PrecioUnitario = producto.precioUnitario;
        this.PrecioTotal = producto.precioTotal;
     
      }
    } 
  }

  UpdateProducto(newNombre: HTMLInputElement,newDescripcion: HTMLInputElement,newCantidad: HTMLInputElement,newFechaCaducidad: HTMLInputElement, newPrecioUnitario: HTMLInputElement, newPrecioTotal: HTMLInputElement) {
    if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
        if (window.confirm('Are you sure, you want to modify?')){
          const Producto = {
            Id: this.seleccionado, 
            Nombre: newNombre.value,
            Descripción: newDescripcion.value,
            Cantidad: newCantidad.value,
            Fecha_caducidad: newFechaCaducidad.value,
            PrecioUnitario: newPrecioUnitario.value,
            PrecioTotal: newPrecioTotal.value,
        
          };
          this.APIServices.UpdateProducto(this.seleccionado, Producto).subscribe(data => {
            this.GetProducto();
            newNombre.value = '';
            newDescripcion.value = '';
            newCantidad.value = '';
            newFechaCaducidad.value = '';
            newPrecioUnitario.value = '';
            newPrecioTotal.value = '';
            this.seleccionado= '';
          
          })
        }
      }
    }  
  }

}
