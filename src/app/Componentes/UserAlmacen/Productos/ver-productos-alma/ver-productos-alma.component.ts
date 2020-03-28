import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';

@Component({
  selector: 'app-ver-productos-alma',
  templateUrl: './ver-productos-alma.component.html',
  styleUrls: ['./ver-productos-alma.component.scss']
})
export class VerProductosAlmaComponent implements OnInit {
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
