import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-edi-empleados-alma',
  templateUrl: './edi-empleados-alma.component.html',
  styleUrls: ['./edi-empleados-alma.component.scss']
})
export class EdiEmpleadosAlmaComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Apellido : string;
  public Fecha_Nac : string;
  public Fecha_Ing : string;
  public Cedula : string;
  public Telefono : string;
  public Puesto : string;
  public Sexo : string;
  public gender: string;
  public seleccionado: string;
  public Empleados: any = [];

  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }


  ngOnInit(): void {
    if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
      this.Goto('Login'); 
    }
    this.GetEmpleado();
  }

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }

  GetEmpleadoSelected(){
    for(let empleado of this.Empleados){
      if(this.seleccionado == empleado.id){
        this.ID = empleado.id;
        this.Nombre = empleado.nombre;
        this.Apellido = empleado.apellido;
        this.Fecha_Nac = empleado.fecha_Nac;
        this.Fecha_Ing = empleado.fecha_Ing;
        this.Puesto = empleado.puesto;
       // this.Sexo = empleado.sexo;
        this.Cedula = empleado.cedula;
        this.Telefono = empleado.telefono;
       
     
      }
     
    }
  }

  GetEmpleado(){
    this.APIServices.GetEmpleado().subscribe((data: {}) => {
        this.Empleados = data;
        console.log(this.Empleados);
    })
    }

    UpdateEmpleado(newNombre:HTMLInputElement,newApellido:HTMLInputElement,newFechaNacimiento:HTMLInputElement,newFechaIngreso:HTMLInputElement,newCedula:HTMLInputElement,newTelefono:HTMLInputElement,newPuesto:HTMLInputElement,newSexoM:HTMLInputElement,newSexoF:HTMLInputElement) {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
        if(newSexoM.checked){
          this.gender= newSexoM.value
        }
        if(newSexoF.checked){
          this.gender= newSexoF.value
        }
      if (window.confirm('Are you sure, you want to modify?')){
        const empleado = {
          ID: this.seleccionado,
          Nombre: newNombre.value,
          Apellido: newApellido.value,
          Fecha_Nac: newFechaNacimiento.value,
          Fecha_Ing: newFechaIngreso.value,
          Cedula: newCedula.value,
          Telefono: newTelefono.value,
          Puesto: newPuesto.value,
          Sexo: this.gender
    
        };
        this.APIServices.UpdateEmpleado(this.seleccionado, empleado).subscribe(data => {
          this.GetEmpleado();
          newNombre.value = '';
          newApellido.value = '';
          newFechaNacimiento.value = '';
          newFechaIngreso.value = '';
          newCedula.value = '';
          newTelefono.value = '';
          newPuesto.value = '';
          newSexoM.checked = false;
          newSexoF.checked = false;
          this.seleccionado= "";
         
        })
      }
      } 
    }  
  }


}
 