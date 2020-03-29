import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.scss']
})
export class EditUsuariosComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public User : string;
  public Password : string;
  public Area : string;
  public NombreArea: string;
  public seleccionado: string;

  public Usuarios: any = [];

  trustedUser= "admin";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
    this.GetUser();
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  GetUser(){
    this.APIServices.GetUser().subscribe((data: {}) => {
        this.Usuarios = data;
        console.log(this.Usuarios);
    })
    }
    GetUserSelected(){
      for(let usuario of this.Usuarios){
        if(this.seleccionado == usuario.id){
          this.ID = usuario.id;
          this.Nombre = usuario.nombre;
          this.User = usuario.user;
          this.Password = usuario.password;
          this.Area = usuario.area;
          this.NombreArea = usuario.nombredelArea;
        }
      }
    }

    UpdateUser(newNombre: HTMLInputElement,newUser: HTMLInputElement,newPassword: HTMLInputElement,newArea: HTMLInputElement, newNombreArea: HTMLInputElement) {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
      if (window.confirm('Are you sure, you want to modify?')){
        const user = {
          Id: this.seleccionado, 
          Nombre: newNombre.value,
          User: newUser.value,
          Password: newPassword.value,
          Area: newArea.value,
          NombredelArea: newNombreArea.value,
        };
        if(this.Area != "admin"){
        this.APIServices.UpdateUser(this.seleccionado, user).subscribe(data => {
          this.GetUser();
          newNombre.value = '';
          newUser.value = '';
          newPassword.value = '';
          newArea.value = '';
          newNombreArea.value = '';
          this.seleccionado = '';
        } )
      }else{window.alert("No se puede modificar a este usuario");}
    }
      }
    }
    }


}
