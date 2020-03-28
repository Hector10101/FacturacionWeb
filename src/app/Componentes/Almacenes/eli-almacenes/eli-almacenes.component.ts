import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-eli-almacenes',
  templateUrl: './eli-almacenes.component.html',
  styleUrls: ['./eli-almacenes.component.scss']
})
export class EliAlmacenesComponent implements OnInit {
  public ID : any;
  public Nombre : string;
  public Ubicacion : string;
  public Descripcion : string;
  public Telefono : number;
  public seleccionado: string;
 

  
  public Almacenes: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetAlmacen();
  }

  GetAlmacenSelected(){
    for(let almacen of this.Almacenes){
      if(almacen.Id === this.seleccionado){
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


  DeleteAlmacen() {
    if(this.Almacenes.ID === this.ID){
    if (window.confirm('Are you sure, you want to delete?')){
      this.APIServices.DeleteAlmacen(this.seleccionado).subscribe(data => {
        this.GetAlmacen();
      })
    }
    }
  }  


}
 