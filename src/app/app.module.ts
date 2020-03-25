import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing} from './app.routes'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './Componentes/navegacion/navegacion.component';

import { HomeComponent } from './Componentes/home/home.component';

import {HomeUsuariosComponent} from './Componentes/Usuarios/home-usuarios/home-usuarios.component';
import { AgregarUsuariosComponent } from './Componentes/Usuarios/agregar-usuarios/agregar-usuarios.component'



@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    HomeComponent,
    HomeUsuariosComponent,
    AgregarUsuariosComponent,

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
