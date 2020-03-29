import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-eli-usuarios',
  templateUrl: './eli-usuarios.component.html',
  styleUrls: ['./eli-usuarios.component.scss']
})
export class EliUsuariosComponent implements OnInit {

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
  GetUser(){
    this.APIServices.GetUser().subscribe((data: {}) => {
        this.Usuarios = data;
        console.log(this.Usuarios);
    })
    }
  DeleteUser() {
    if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
        if(this.Area !="admin"){
        if (window.confirm('Are you sure, you want to delete?')){
          this.APIServices.DeleteUser(this.seleccionado).subscribe(data => {
            this.GetUser();
            this.ID = '';
            this.Nombre = '';
            this.User = '';
            this.Password = '';
            this.Area = '';
            this.NombreArea = '';
            this.seleccionado = '';
          })
        }

      }else{window.alert("Este Usuario no puede ser eliminado");}
      }
    }
  }
}
