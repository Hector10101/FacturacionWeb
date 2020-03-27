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
import { ModifiSucursalesComponent } from './Componentes/Sucursales/modifi-sucursales/modifi-sucursales.component';
import { EditSucursalComponent } from './Componentes/Sucursales/edit-sucursal/edit-sucursal.component';
import { EliSucursalComponent } from './Componentes/Sucursales/eli-sucursal/eli-sucursal.component';
import { HomeAlmacenesComponent } from './Componentes/Almacenes/home-almacenes/home-almacenes.component';
import { AgregarAlmacenesComponent } from './Componentes/Almacenes/agregar-almacenes/agregar-almacenes.component';
import { VerAlmacenesComponent } from './Componentes/Almacenes/ver-almacenes/ver-almacenes.component';
import { ModifiAlmacenesComponent } from './Componentes/Almacenes/modifi-almacenes/modifi-almacenes.component';
import { EdiAlmacenesComponent } from './Componentes/Almacenes/edi-almacenes/edi-almacenes.component';
import { EliAlmacenesComponent } from './Componentes/Almacenes/eli-almacenes/eli-almacenes.component';
import { HomeProductosComponent } from './Componentes/UserSucursal/Productos/home-productos/home-productos.component';
import { AgregarProductosComponent } from './Componentes/UserSucursal/Productos/agregar-productos/agregar-productos.component';
import { VerProductosComponent } from './Componentes/UserSucursal/Productos/ver-productos/ver-productos.component';
import { ModifiProductosComponent } from './Componentes/UserSucursal/Productos/modifi-productos/modifi-productos.component';
import { EdiProductosComponent } from './Componentes/UserSucursal/Productos/edi-productos/edi-productos.component';
import { EliProductosComponent } from './Componentes/UserSucursal/Productos/eli-productos/eli-productos.component';
import { HomeEmpleadosComponent } from './Componentes/UserSucursal/Empleados/home-empleados/home-empleados.component';
import { AgregarEmpleadosComponent } from './COmponentes/UserSucursal/Empleados/agregar-empleados/agregar-empleados.component';
import { VerEmpleadosComponent } from './Componentes/UserSucursal/Empleados/ver-empleados/ver-empleados.component';
import { ModifiEmpleadosComponent } from './Componentes/UserSucursal/Empleados/modifi-empleados/modifi-empleados.component';
import { EliEmpleadosComponent } from './Componentes/UserSucursal/Empleados/eli-empleados/eli-empleados.component';
import { EditEmpleadosComponent } from './Componentes/UserSucursal/Empleados/edit-empleados/edit-empleados.component';
import { FacturarComponent } from './Componentes/UserSucursal/Facturar/facturar/facturar.component';
import { HomeEmpleadosAlmaComponent } from './Componentes/UserAlmacen/Empleados/home-empleados-alma/home-empleados-alma.component';
import { AgregarEmpleadosAlmaComponent } from './Componentes/UserAlmacen/Empleados/agregar-empleados-alma/agregar-empleados-alma.component';
import { VerEmpleadosAlmaComponent } from './Componentes/UserAlmacen/Empleados/ver-empleados-alma/ver-empleados-alma.component';
import { ModifEmpleadoAlmaComponent } from './Componentes/UserAlmacen/Empleados/modif-empleado-alma/modif-empleado-alma.component';
import { EliEmpleadosAlmaComponent } from './Componentes/UserAlmacen/Empleados/eli-empleados-alma/eli-empleados-alma.component';
import { EdiEmpleadosAlmaComponent } from './Componentes/UserAlmacen/Empleados/edi-empleados-alma/edi-empleados-alma.component';
import { HomeProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/home-productos-alma/home-productos-alma.component';
import { AgregarProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/agregar-productos-alma/agregar-productos-alma.component';
import { VerProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/ver-productos-alma/ver-productos-alma.component';
import { ModifiProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/modifi-productos-alma/modifi-productos-alma.component';
import { EliProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/eli-productos-alma/eli-productos-alma.component';
import { EditProductosAlmaComponent } from './Componentes/UserAlmacen/Productos/edit-productos-alma/edit-productos-alma.component';



const app_routes: Routes = [
    { path: 'home', component: HomeComponent},
        // Usuarios
    { path: 'HomeUsuarios', component: HomeUsuariosComponent},
    { path: 'AgregarUsuarios', component: AgregarUsuariosComponent},
    { path: 'VerUsuarios', component: VerUsuariosComponent},
    { path: 'ModifiUsuarios', component: MofiUsuariosComponent},
    { path: 'EditUsuarios', component: EditUsuariosComponent},
    { path: 'EliUsuarios', component: EliUsuariosComponent},

    // Sucursales
    { path: 'HomeSucursales', component: HomeSurcusalesComponent},
    { path: 'AgregarSucursales', component: AgregarSucursalComponent},
    { path: 'VerSucursales', component: VerSucursaliesComponent},
    { path: 'ModifiSucursales', component: ModifiSucursalesComponent},
    { path: 'EditSucursales', component: EditSucursalComponent},
    { path: 'EliSucursales', component: EliSucursalComponent},

    // Almacenes
    { path: 'HomeAlmacenes', component: HomeAlmacenesComponent},
    { path: 'AgregarAlmacenes', component: AgregarAlmacenesComponent},
    { path: 'VerAlmacenes', component: VerAlmacenesComponent},
    { path: 'ModifiAlmacenes', component: ModifiAlmacenesComponent},
    { path: 'EditAlmacenes', component: EdiAlmacenesComponent},
    { path: 'EliAlmacenes', component: EliAlmacenesComponent},


    // UserSucursal
        // Productos
    { path: 'HomeProductos', component: HomeProductosComponent},
    { path: 'AgregarProductos', component: AgregarProductosComponent},
    { path: 'VerProductos', component: VerProductosComponent},
    { path: 'ModifiProductos', component: ModifiProductosComponent},
    { path: 'EditProductos', component: EdiProductosComponent},
    { path: 'EliProductos', component: EliProductosComponent},
        // Empleados
    { path: 'HomeEmpleados', component: HomeEmpleadosComponent},
    { path: 'AgregarEmpleados', component: AgregarEmpleadosComponent},
    { path: 'VerEmpleados', component: VerEmpleadosComponent},
    { path: 'ModifiEmpleados', component: ModifiEmpleadosComponent},
    { path: 'EditEmpleados', component: EditEmpleadosComponent},
    { path: 'EliEmpleados', component: EliEmpleadosComponent},

        // Facturar
    { path: 'HomeFacturar', component: FacturarComponent},






    // UserAlmacen
    { path: 'HomeEmpleadosAlma', component: HomeEmpleadosAlmaComponent},
    { path: 'AgregarEmpleadosAlma', component: AgregarEmpleadosAlmaComponent},
    { path: 'VerEmpleadosAlma', component: VerEmpleadosAlmaComponent},
    { path: 'ModifiEmpleadosAlma', component: ModifEmpleadoAlmaComponent},
    { path: 'EditEmpleadosAlma', component: EdiEmpleadosAlmaComponent},
    { path: 'EliEmpleadosAlma', component: EliEmpleadosAlmaComponent},
        // Productos
    { path: 'HomeProductosAlma', component: HomeProductosAlmaComponent},
    { path: 'AgregarProductosAlma', component: AgregarProductosAlmaComponent},
    { path: 'VerProductosAlma', component: VerProductosAlmaComponent},
    { path: 'ModifiProductosAlma', component: ModifiProductosAlmaComponent},
    { path: 'EditProductosAlma', component: EditProductosAlmaComponent},
    { path: 'EliProductosAlma', component: EliProductosAlmaComponent},




    












    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);