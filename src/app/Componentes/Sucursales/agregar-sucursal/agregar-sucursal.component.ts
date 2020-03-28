import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.scss']
})
export class AgregarSucursalComponent implements OnInit {
  public Sucursales: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
  }

  PostSucursal(newNombre: HTMLInputElement,newUbicacion: HTMLInputElement,newTelefono: HTMLInputElement) {
    const sucursal = {
    Nombre: newNombre.value,
    Ubicacion: newUbicacion.value,
    Telefono: newTelefono.value,

    };
    this.APIServices.PostSucursal(sucursal).subscribe((registro: {}) => {
      console.log(registro);
    })
  }

}
 