import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-eli-empleados-alma',
  templateUrl: './eli-empleados-alma.component.html',
  styleUrls: ['./eli-empleados-alma.component.scss']
})
export class EliEmpleadosAlmaComponent implements OnInit {
  public ID : string;
  public Nombre : string;
  public Apellido : string;
  public Fecha_Nac : string;
  public Fecha_Ing : string;
  public Cedula : string;
  public Telefono : string;
  public Puesto : string;
  public Sexo : string;
  public seleccionado: string;
  public Empleados: any = [];

  constructor(private APIServices:APIservicesService) { }

  ngOnInit(): void {
    this.GetEmpleado();
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
        this.Sexo = empleado.sexo;
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

    DeleteEmpleado() {
      if(this.seleccionado != null){
      if(this.seleccionado == this.ID){
      if (window.confirm('Are you sure, you want to delete?')){
        this.APIServices.DeleteEmpleado(this.seleccionado).subscribe(data => {
          this.GetEmpleado();
          this.ID = "";
          this.Nombre = "";
          this.Apellido = "";
          this.Fecha_Nac ="";
          this.Fecha_Ing = "";
          this.Puesto ="";
          this.Sexo = "";
          this.Cedula = "";
          this.Telefono = "";
        })
      }
      }
    }  
  }

}
