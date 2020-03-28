import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-edit-sucursal',
  templateUrl: './edit-sucursal.component.html',
  styleUrls: ['./edit-sucursal.component.scss']
})
export class EditSucursalComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Ubicacion : string;
  public Telefono : string;
  public seleccionado: string;
 

  
  public Sucursales: any = [];


  constructor(private APIServices:APIservicesService) { }

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
    UpdateSucursal(newNombre: HTMLInputElement,newUbicacion: HTMLInputElement,newTelefono: HTMLInputElement) {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
      if (window.confirm('Are you sure, you want to modify?')){
        const sucursal = {
          Id: this.seleccionado, 
          Nombre: newNombre.value,
          Ubicacion: newUbicacion.value,
          Telefono: newTelefono.value,
      
        };
        this.APIServices.UpdateSucursal(this.seleccionado, sucursal).subscribe(data => {
          this.GetSucursal();
          newNombre.value = '';
          newUbicacion.value = '';
          newTelefono.value = '';
          this.seleccionado= "";
         
        })
      }
      }
    }  
  }

}
