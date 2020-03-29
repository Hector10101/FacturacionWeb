import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-eli-almacenes',
  templateUrl: './eli-almacenes.component.html',
  styleUrls: ['./eli-almacenes.component.scss']
})
export class EliAlmacenesComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Ubicacion : string;
  public Descripcion : string;
  public Telefono : string;
  public seleccionado: string;

  public Almacenes: any = [];

  trustedUser= "admin";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
    if(this.trustedUser !=this.APIServices.getUserLoggedIn()){
      this.Goto('Home'); 
    }
    this.GetAlmacen();
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  GetAlmacenSelected(){
    for(let almacen of this.Almacenes){
      if(this.seleccionado == almacen.id){
        this.ID = almacen.id;
        this.Nombre = almacen.nombre;
        this.Descripcion = almacen.descripcion;
        this.Ubicacion = almacen.ubicacion;
        this.Telefono = almacen.telefono;
       
     
      }
    }
  }



  GetAlmacen(){
    this.APIServices.GetAlmacen().subscribe((data: {}) => {
        this.Almacenes = data;
        console.log(this.Almacenes);
    })
    }


  DeleteAlmacen() {
    if(this.seleccionado != null){
    if(this.seleccionado == this.ID){
    if (window.confirm('Are you sure, you want to delete?')){
      this.APIServices.DeleteAlmacen(this.seleccionado).subscribe(data => {
        this.GetAlmacen();
        this.ID ="";
        this.Nombre ="";
        this.Descripcion = "";
        this.Ubicacion = "";
        this.Telefono = "";
      })
    }
    }
  }  
}
}
 