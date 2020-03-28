import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-almacenes',
  templateUrl: './agregar-almacenes.component.html',
  styleUrls: ['./agregar-almacenes.component.scss']
})
export class AgregarAlmacenesComponent implements OnInit {
  public Almacenes: any = [];
   trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
      if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
        this.Goto('Home'); 
      }
  } 

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
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
      newNombre.value = '';
      newDescripcion.value = '';
      newUbicacion.value = '';
      newTelefono.value = '';
    })
  }
  

}
 