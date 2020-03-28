import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-sucursalies',
  templateUrl: './ver-sucursalies.component.html',
  styleUrls: ['./ver-sucursalies.component.scss']
})
export class VerSucursaliesComponent implements OnInit {
  public Sucursales: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetSucursal();
  }

  GetSucursal(){
    this.APIServices.GetSucursal().subscribe((data: {}) => {
        this.Sucursales = data;
        console.log(this.Sucursales);
    })
    }


}
 