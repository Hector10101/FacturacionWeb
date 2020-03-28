import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-eli-usuarios',
  templateUrl: './eli-usuarios.component.html',
  styleUrls: ['./eli-usuarios.component.scss']
})
export class EliUsuariosComponent implements OnInit {
  public Usuarios: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
  }

  DeleteUser(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.APIServices.DeleteUser(id).subscribe(data => {
       console.log(data);
      })
    }
  }  

} 
