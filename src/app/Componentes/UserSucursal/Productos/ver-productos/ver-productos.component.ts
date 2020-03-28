import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-productos',
  templateUrl: './ver-productos.component.html',
  styleUrls: ['./ver-productos.component.scss']
})
export class VerProductosComponent implements OnInit {
  public Productos: any = [];
  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
    this.GetProducto();
  }
  GetProducto(){
    this.APIServices.GetProducto().subscribe((data: {}) => {
        this.Productos = data;
        console.log(this.Productos);
    })
    }
}
