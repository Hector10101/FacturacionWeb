import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-eli-productos',
  templateUrl: './eli-productos.component.html',
  styleUrls: ['./eli-productos.component.scss']
})
export class EliProductosComponent implements OnInit {

  public Productos: any = [];
  public ID : string;
  public Nombre : string;
  public Descricipcion : string;
  public Cantidad : string;
  public FechaCaducidad: string;
  public PrecioUnitario: string;
  public PrecioTotal: string;
  public seleccionado: string;
  
  constructor(private APIServices: APIservicesService) { }
  ngOnInit(): void {
    this.GetProducto();
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
          this.Descricipcion = producto.descripcion;
          this.Cantidad = producto.cantidad;
          this.FechaCaducidad = producto.fecha_caducidad;
          this.PrecioUnitario = producto.precioUnitario;
          this.PrecioTotal = producto.precioTotal;
       
        }
      } 
    }
    DeleteProducto() {
      if(this.seleccionado != null){
        if(this.seleccionado == this.ID){
          if (window.confirm('Are you sure, you want to delete?')){
            this.APIServices.DeleteProducto(this.seleccionado).subscribe(data => {
              this.GetProducto();
              this.ID = '';
              this.Nombre = '';
              this.Descricipcion = '';
              this.Cantidad = '';
              this.FechaCaducidad = '';
              this.PrecioUnitario = '';
              this.PrecioTotal = '';
              this.seleccionado = '';
            })
          }
        }
      }  
    }
}
