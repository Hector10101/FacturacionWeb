import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-usuarios',
  templateUrl: './ver-usuarios.component.html',
  styleUrls: ['./ver-usuarios.component.scss']
})
export class VerUsuariosComponent implements OnInit {
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
}
