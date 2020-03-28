import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.scss']
})
export class AgregarUsuariosComponent implements OnInit {
  public Usuarios: any = [];


  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
   
  } 
  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  PostUser(newNombre: HTMLInputElement,newUsuario: HTMLInputElement,newPassword: HTMLInputElement,newArea: HTMLInputElement,newNombreArea: HTMLInputElement) {
    const usuario = {
    Nombre: newNombre.value,
    User: newUsuario.value,
    Password: newPassword.value,
    Area: newArea.value,
    NombredelArea: newNombreArea.value,
    };
    this.APIServices.PostUser(usuario).subscribe((registro: {}) => {
      console.log(registro);
      newNombre.value = '';
      newUsuario.value = '';
      newPassword.value = '';
      newArea.value = '';
      newNombreArea.value = '';
    })
  }






}
