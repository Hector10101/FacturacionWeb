import {RouterModule, Routes} from '@angular/router';
import { UsuariosComponent } from './Componentes/usuarios/usuarios.component';
import { HomeComponent } from './Componentes/home/home.component';

const app_routes: Routes =[
    { path: 'home', component: HomeComponent},

    { path: 'usuarios', component: UsuariosComponent},
    

    { path:'**', pathMatch: 'full', redirectTo: 'home'}
];


export const app_routing = RouterModule.forRoot(app_routes);