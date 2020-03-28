import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-eli-sucursal',
  templateUrl: './eli-sucursal.component.html',
  styleUrls: ['./eli-sucursal.component.scss']
})
export class EliSucursalComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Ubicacion : string;
  public Telefono : string;
  public seleccionado: string;
 

  
  public Sucursales: any = [];



  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetSucursal();
  }

  GetSucursal(){
    this.APIServices.GetSucursal().subscribe((data: {}) => {
        this.Sucursales = data;
        console.log(this.Sucursales);
    })
    }

    GetSucursalSelected(){
      for(let sucursal of this.Sucursales){
        if(this.seleccionado == sucursal.id){
          this.ID = sucursal.id;
          this.Nombre = sucursal.nombre;
          this.Ubicacion = sucursal.ubicacion;
          this.Telefono = sucursal.telefono;
         
       
        }
      } 
    }

    DeleteSucursal() {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
      if (window.confirm('Are you sure, you want to delete?')){
        this.APIServices.DeleteSucursal(this.seleccionado).subscribe(data => {
          this.GetSucursal();
          this.ID ="";
          this.Nombre ="";
          this.Ubicacion = "";
          this.Telefono = "";
        })
      }
      }
    }  
  }

}
 