import {RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './Componentes/home/home.component';
import { HomeUsuariosComponent } from './Componentes/Usuarios/home-usuarios/home-usuarios.component';
import { AgregarUsuariosComponent } from './Componentes/Usuarios/agregar-usuarios/agregar-usuarios.component';


const app_routes: Routes =[
    { path: 'home', component: HomeComponent},

    { path: 'HomeUsuarios', component: HomeUsuariosComponent},
    { path: 'AgregarUsuarios', component: AgregarUsuariosComponent},

    

    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];


export const app_routing = RouterModule.forRoot(app_routes);