import { Injectable } from '@angular/core';
import { usuarios } from '../Modelos/usuarios';
import { almacenes } from '../Modelos/almacenes';
import { sucursales } from '../Modelos/sucursales';
import { empleados } from '../Modelos/empleados';
import { productos } from '../Modelos/productos';

import { HttpClientModule, HttpClient, HttpHeaders  } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../Modelos/user.models';

@Injectable({
  providedIn: 'root'
})
export class APIservicesService {
  private allowCors= 'https://cors-anywhere.herokuapp.com/';
  private api ='http://facturacionweb-001-site1.btempurl.com/api';


  private userLogged;
  public usserLogged:User;


  public usuario: usuarios = { Id: 0, Nombre: "", User: "", Password: "", Area: "", NombredelArea: ""};
  public almacen: almacenes = { Id: 0, Nombre: "", Descripcion: "", Ubicacion: "", Telefono: ""};
  public sucursal: sucursales = { Id: 0, Nombre: "", Ubicacion: "", Telefono: ""};

  constructor(private http: HttpClient) {
    this.userLogged = false;

   }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  //Login Services
  setUserLoggedIn(user:User) {
    this.userLogged = true;
    this.usserLogged = user;
    localStorage.setItem('UserLogged', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('UserLogged'));
  }






                              /**
                               * 
                               * End Login Settings
                               * 
                               */ 



  //User Services
  GetUser(): Observable<usuarios> {
    return this.http.get<usuarios>(`${this.allowCors}${this.api}/usuario/`)
    .pipe(
      retry(1),

    )
  }
  GetJustOneUser(id: string){
    return this.http.get<usuarios>(`${this.allowCors}${this.api}/usuario/${id}`)
    .pipe(
      retry(1),
    )
  }
  PostUser(usuario): Observable<usuarios> {
    return this.http.post<usuarios>(`${this.allowCors}${this.api}/usuario/`, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }
  UpdateUser(id, usuario): Observable<usuarios> {
    return this.http.put<usuarios>(`${this.allowCors}${this.api}/usuario/${id}`, JSON.stringify(usuario), this.httpOptions)
    .pipe(
      retry(1),
    )
  }  
  DeleteUser(id){
    return this.http.delete<usuarios>(`${this.allowCors}${this.api}/usuario/${id}`, this.httpOptions)
    .pipe(
      retry(1),
    )
  }
                                            /*END User Services
                                            *
                                            *
                                            * 
                                            */

     //Almacen Services                                       
     GetAlmacen(): Observable<almacenes> {
      return this.http.get<almacenes>( `${this.allowCors}${this.api}/almacen/`)
      .pipe(
        retry(1),
  
      )
    }
    GetJustOneAlmacen(id: string){
      return this.http.get<almacenes>( `${this.allowCors}${this.api}/almacen/${id}`)
      .pipe(
        retry(1),
      )
    }
    PostAlmacen(almacen): Observable<almacenes> {
      return this.http.post<almacenes>(`${this.allowCors}${this.api}/almacen/`, JSON.stringify(almacen), this.httpOptions)
      .pipe(
        retry(1),
        
      )
    }
    UpdateAlmacen(id, almacen): Observable<almacenes> {
      return this.http.put<almacenes>(`${this.allowCors}${this.api}/almacen/${id}`, JSON.stringify(almacen), this.httpOptions)
      .pipe(
        retry(1),
      )
    }  
    DeleteAlmacen(id: string){
      return this.http.delete<almacenes>(`${this.allowCors}${this.api}/almacen/${id}`, this.httpOptions)
      .pipe(
        retry(1),
      )
    }
                                              /*END Almacen Services
                                              *
                                              *
                                              * 
                                              */

    //Sucursal Services                                       
     GetSucursal(): Observable<sucursales> {
      return this.http.get<sucursales>( `${this.allowCors}${this.api}/sucursal/`)
      .pipe(
        retry(1),
  
      )
    }
    GetJustOneSucursal(id: string){
      return this.http.get<sucursales>( `${this.allowCors}${this.api}/sucursal/${id}`)
      .pipe(
        retry(1),
      )
    }
    PostSucursal(sucursal): Observable<sucursales> {
      return this.http.post<sucursales>(`${this.allowCors}${this.api}/sucursal/`, JSON.stringify(sucursal), this.httpOptions)
      .pipe(
        retry(1),
        
      )
    }
    UpdateSucursal(id, sucursal): Observable<sucursales> {
      return this.http.put<sucursales>(`${this.allowCors}${this.api}/sucursal/${id}`, JSON.stringify(sucursal), this.httpOptions)
      .pipe(
        retry(1),
      )
    }  
    DeleteSucursal(id){
      return this.http.delete<sucursales>(`${this.allowCors}${this.api}/sucursal/${id}`, this.httpOptions)
      .pipe(
        retry(1),
      )
    }
                                              /*END Sucursal Services
                                              *
                                              *
                                              */

  //Empleado Services                                       
  GetEmpleado(): Observable<empleados> {
    return this.http.get<empleados>( `${this.allowCors}${this.api}/empleado/`)
    .pipe(
      retry(1),

    )
  }
  GetJustOneEmpleado(id: string){
    return this.http.get<empleados>( `${this.allowCors}${this.api}/empleado/${id}`)
    .pipe(
      retry(1),
    )
  }
  PostEmpleado(empleado): Observable<empleados> {
    return this.http.post<empleados>(`${this.allowCors}${this.api}/empleado/`, JSON.stringify(empleado), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }
  UpdateEmpleado(id, empleado): Observable<empleados> {
    return this.http.put<empleados>(`${this.allowCors}${this.api}/empleado/${id}`, JSON.stringify(empleado), this.httpOptions)
    .pipe(
      retry(1),
    )
  }  
  DeleteEmpleado(id){
    return this.http.delete<empleados>(`${this.allowCors}${this.api}/empleado/${id}`, this.httpOptions)
    .pipe(
      retry(1),
    )
  }
                                       /*END Empleado Services
                                              *
                                              *
                                              */

  //Producto Services                                       
  GetProducto(): Observable<productos> {
    return this.http.get<productos>( `${this.allowCors}${this.api}/producto/`)
    .pipe(
      retry(1),

    )
  }
  GetJustOneProducto(id: string){
    return this.http.get<productos>( `${this.allowCors}${this.api}/producto/${id}`)
    .pipe(
      retry(1),
    )
  }
  PostProducto(producto): Observable<productos> {
    return this.http.post<productos>(`${this.allowCors}${this.api}/producto/`, JSON.stringify(producto), this.httpOptions)
    .pipe(
      retry(1),
      
    )
  }
  UpdateProducto(id, producto): Observable<productos> {
    return this.http.put<productos>(`${this.allowCors}${this.api}/producto/${id}`, JSON.stringify(producto), this.httpOptions)
    .pipe(
      retry(1),
    )
  }  
  DeleteProducto(id){
    return this.http.delete<productos>(`${this.allowCors}${this.api}/producto/${id}`, this.httpOptions)
    .pipe(
      retry(1),
    )
  }
                                       /*END Producto Services
                                              *
                                              *
                                              */
}
