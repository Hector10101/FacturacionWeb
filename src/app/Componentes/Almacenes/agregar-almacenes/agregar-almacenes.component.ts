import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-agregar-almacenes',
  templateUrl: './agregar-almacenes.component.html',
  styleUrls: ['./agregar-almacenes.component.scss']
})
export class AgregarAlmacenesComponent implements OnInit {
  public Almacenes: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
  }
 
  PostAlmacen(newNombre: HTMLInputElement,newDescripcion: HTMLInputElement,newUbicacion: HTMLInputElement,newTelefono: HTMLInputElement) {
    const almacen = {
    Nombre: newNombre.value,
    Descripcion: newDescripcion.value,
    Ubicacion: newUbicacion.value,
    Telefono: newTelefono.value,

    };
    this.APIServices.PostAlmacen(almacen).subscribe((registro: {}) => {
      console.log(registro);
    })
  }
  

}
 