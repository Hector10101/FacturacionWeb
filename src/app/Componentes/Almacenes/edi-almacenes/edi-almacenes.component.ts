import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-edi-almacenes',
  templateUrl: './edi-almacenes.component.html',
  styleUrls: ['./edi-almacenes.component.scss']
})
export class EdiAlmacenesComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Ubicacion : string;
  public Descripcion : string;
  public Telefono : string;
  public seleccionado: string;
  public Almacenes: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetAlmacen();
  }
  GetAlmacenSelected(){
    for(let almacen of this.Almacenes){
      if(this.seleccionado == almacen.id){
        this.ID = almacen.id;
        this.Nombre = almacen.nombre;
        this.Descripcion = almacen.descripcion;
        this.Ubicacion = almacen.ubicacion;
        this.Telefono = almacen.telefono;
       
     
      }
    }
  }

  GetAlmacen(){
    this.APIServices.GetAlmacen().subscribe((data: {}) => {
        this.Almacenes = data;
        console.log(this.Almacenes);
    })
    }

   


     UpdateAlmacen(newNombre: HTMLInputElement,newDescripcion: HTMLInputElement,newUbicacion: HTMLInputElement,newTelefono: HTMLInputElement) {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
      if (window.confirm('Are you sure, you want to modify?')){
        const almacen = {
          Id: this.seleccionado, 
          Nombre: newNombre.value,
          Descripcion: newDescripcion.value,
          Ubicacion: newUbicacion.value,
          Telefono: newTelefono.value,
      
        };
        this.APIServices.UpdateAlmacen(this.seleccionado, almacen).subscribe(data => {
          this.GetAlmacen();
          newNombre.value = '';
          newDescripcion.value = '';
          newUbicacion.value = '';
          newTelefono.value = '';
          this.seleccionado= "";
         
        })
      }
      }
    }  
  }

}
