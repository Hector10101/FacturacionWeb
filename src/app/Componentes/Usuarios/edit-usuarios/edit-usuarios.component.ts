import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-edit-usuarios',
  templateUrl: './edit-usuarios.component.html',
  styleUrls: ['./edit-usuarios.component.scss']
})
export class EditUsuariosComponent implements OnInit {
  public Usuarios: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetUser();
  }

  GetUser(){
    this.APIServices.GetUser().subscribe((data: {}) => {
        this.Usuarios = data;
        console.log(this.Usuarios);
    })
    }

   
    GetJustOneUser(){
      this.APIServices.GetJustOneUser('IdINT').subscribe((data: {}) => {
        console.log(data);
    })
    }
    

    UpdateUser() {
      if(window.confirm('Are you sure, you want to update?')){
        const user = {
          id: "int",
          Nombre: "string",
          User: "string",
          Password: "string",
          Area: "string",
          NombredelArea: "string",
        };
        this.APIServices.UpdateUser(2, user).subscribe(registro => {
          console.log(registro);
        })
      }
    }
  


}
