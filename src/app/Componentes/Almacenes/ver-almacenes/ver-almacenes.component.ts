import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-almacenes',
  templateUrl: './ver-almacenes.component.html',
  styleUrls: ['./ver-almacenes.component.scss']
})
export class VerAlmacenesComponent implements OnInit {
  public Almacenes: any = [];

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetAlmacen();
  }


  GetAlmacen(){
    this.APIServices.GetAlmacen().subscribe((data: {}) => {
        this.Almacenes = data;
        console.log(this.Almacenes);
    })
    }
}
