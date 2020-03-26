import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { HomeUsuariosComponent } from './Componentes/Usuarios/home-usuarios/home-usuarios.component';
import { AgregarUsuariosComponent } from './Componentes/Usuarios/agregar-usuarios/agregar-usuarios.component';
import { VerUsuariosComponent } from './Componentes/Usuarios/ver-usuarios/ver-usuarios.component';
import { MofiUsuariosComponent } from './Componentes/Usuarios/mofi-usuarios/mofi-usuarios.component';
import { EditUsuariosComponent } from './Componentes/Usuarios/edit-usuarios/edit-usuarios.component';
import { EliUsuariosComponent } from './Componentes/Usuarios/eli-usuarios/eli-usuarios.component';
import { HomeSurcusalesComponent } from './Componentes/Sucursales/home-surcusales/home-surcusales.component';
import { AgregarSucursalComponent } from './Componentes/Sucursales/agregar-sucursal/agregar-sucursal.component';
import { VerSucursaliesComponent } from './Componentes/Sucursales/ver-sucursalies/ver-sucursalies.component';


const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
    
    //Usuarios
    { path: 'HomeUsuarios', component: HomeUsuariosComponent},
    { path: 'AgregarUsuarios', component: AgregarUsuariosComponent},
    { path: 'VerUsuarios', component: VerUsuariosComponent},
    { path: 'ModifiUsuarios', component: MofiUsuariosComponent},
    { path: 'EditUsuarios', component: EditUsuariosComponent},
    { path: 'EliUsuarios', component: EliUsuariosComponent},

    //Sucursales
    { path: 'HomeSucursales', component: HomeSurcusalesComponent},
    { path: 'AgregarSucursales', component: AgregarSucursalComponent},
    { path: 'VerSucursales', component: VerSucursaliesComponent},







    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);