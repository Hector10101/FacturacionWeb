import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-agregar-usuarios',
  templateUrl: './agregar-usuarios.component.html',
  styleUrls: ['./agregar-usuarios.component.scss']
})
export class AgregarUsuariosComponent implements OnInit {
  public Usuarios: any = [];


  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {

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
    })
  }






}
