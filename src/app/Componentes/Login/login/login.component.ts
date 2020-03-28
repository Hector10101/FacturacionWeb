import { Component, OnInit } from '@angular/core';
import {RouterModule, Routes, Router } from '@angular/router';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import { Route } from '@angular/compiler/src/core';
import { User } from 'src/app/Modelos/user.models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] 
})
export class LoginComponent implements OnInit {
  public Usuarios: any = [];

  public ID : string;
  public Nombre : string;
  public User : string;
  public Password : string;
  public Area : string;
  public NombreArea: string;

  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    this.GetUser();
   console.log(this.APIServices.getUserLoggedIn());
  }
  GetUser(){
    this.APIServices.GetUser().subscribe((data: {}) => {
        this.Usuarios = data;
        console.log(this.Usuarios);
    })
    }

    Goto(ruta) {
      this.router.navigate(['/', ruta]);
    }

    LogIn(newUser:HTMLInputElement,newPassword:HTMLInputElement){
      for(let usuario of this.Usuarios){
        if((newUser.value == usuario.user) && (newPassword.value== usuario.password)){
          this.ID = usuario.id;
          this.Nombre = usuario.nombre;
          this.User = usuario.user;
          this.Password = usuario.password;
          this.Area = usuario.area;
          this.NombreArea = usuario.nombredelArea;
          let u: User = {area: this.Area};        
          this.APIServices.setUserLoggedIn(u);

          console.log(u);
              if(this.Area=="Almacen"){
              this.Goto('HomeAlmacenes');
            }
            if(this.Area=="Sucursal"){
              this.Goto('VerProductos');
            }
        }
      }
     
    }

}
