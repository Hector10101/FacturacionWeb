import { Component, OnInit } from '@angular/core';
import { APIservicesService } from 'src/app/Servicios/apiservices.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FacturacionWeb';

  constructor(private APIServices: APIservicesService) { }

  ngOnInit(): void {
      this.APIServices.setUserLogIn();
  }

}
