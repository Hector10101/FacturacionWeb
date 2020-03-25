import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';
import { UsuariosComponent } from './Componentes/usuarios/usuarios.component';
import { HomeComponent } from './Componentes/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    UsuariosComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
