import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';
import {RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-agregar-empleados-alma',
  templateUrl: './agregar-empleados-alma.component.html',
  styleUrls: ['./agregar-empleados-alma.component.scss']
})
export class AgregarEmpleadosAlmaComponent implements OnInit {
  public Empleados: any = [];
  public sexo: string;

  trustedUser= "Almacen";
  constructor(private APIServices: APIservicesService, private router: Router) { }

  ngOnInit(): void {
      if((this.trustedUser !=this.APIServices.getUserLoggedIn())){
        this.Goto('Login'); 
      }
  } 

  Goto(ruta) {
    this.router.navigate(['/', ruta]);
  }
  PostEmpleado(newNombre:HTMLInputElement,newApellido:HTMLInputElement,newFechaNacimiento:HTMLInputElement,newFechaIngreso:HTMLInputElement,newCedula:HTMLInputElement,newTelefono:HTMLInputElement,newPuesto:HTMLInputElement,newSexoF:HTMLInputElement,newSexoM:HTMLInputElement) {
    if(newSexoM.checked){
      this.sexo= newSexoM.value
    }
    if(newSexoF.checked){
      this.sexo= newSexoF.value
    }
    
    const empleado = {
      Nombre: newNombre.value,
      Apellido: newApellido.value,
      Fecha_Nac: newFechaNacimiento.value,
      Fecha_Ing: newFechaIngreso.value,
      Cedula: newCedula.value,
      Telefono: newTelefono.value,
      Puesto: newPuesto.value,
      Sexo: this.sexo

    };

   
    this.APIServices.PostEmpleado(empleado).subscribe((registro: {}) => {
      console.log(registro);
      newNombre.value = '';
      newApellido.value = '';
      newFechaNacimiento.value = '';
      newFechaIngreso.value = '';
      newCedula.value = '';
      newTelefono.value = '';
      newPuesto.value = '';
      newSexoF.checked=false;
      newSexoM.checked=false;
    })
  }

}
 