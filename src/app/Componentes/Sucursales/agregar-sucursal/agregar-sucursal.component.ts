import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-agregar-sucursal',
  templateUrl: './agregar-sucursal.component.html',
  styleUrls: ['./agregar-sucursal.component.scss']
})
export class AgregarSucursalComponent implements OnInit {
  public Sucursales: any = [];
  trustedUser= "admin";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  PostSucursal(newNombre: HTMLInputElement,newUbicacion: HTMLInputElement,newTelefono: HTMLInputElement) {
    const sucursal = {
    Nombre: newNombre.value,
    Ubicacion: newUbicacion.value,
    Telefono: newTelefono.value,

    }; 
    this.APIServices.PostSucursal(sucursal).subscribe((registro: {}) => {
      console.log(registro);
      newUbicacion.value='';
      newNombre.value='';
      newTelefono.value='';
    })
  }

}
 