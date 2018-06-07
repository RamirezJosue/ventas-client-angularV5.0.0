import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetalleVentasComponent } from './detalleVentas/detalleVentas.component';

import { UsuarioComponent } from './usuarios/usuario.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { CategoriaComponent } from './categorias/categoria.component';
import { VentaComponent } from './ventas/venta.component';
import { DetalleVentaComponent } from './detalleVentas/detalleVenta.component';

import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
          { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
          { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Grafica'} },
          { path: 'perfil', component: ProfileComponent, data: {titulo: 'Perfil de Usuario'} },

        //   Matenimiento
          { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantemiento de Usuarios'} },
          { path: 'articulos', component: ArticulosComponent, data: { titulo: 'Mantemiento de Articulos' } },
          { path: 'categorias', component: CategoriasComponent, data: { titulo: 'Mantemiento de categorias' } },
          { path: 'ventas', component: VentasComponent, data: { titulo: 'Mantemiento de ventas' } },
          { path: 'detalleVentas', component: DetalleVentasComponent, data: { titulo: 'Mantemiento de detalleVentas' } },
          { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Actualizar Usuario' } },
          { path: 'articulo/:id', component: ArticuloComponent, data: { titulo: 'Actualizar Articulo' } },
          { path: 'categoria/:id', component: CategoriaComponent, data: { titulo: 'Actualizar categorias' } },
          { path: 'venta/:id', component: VentaComponent, data: { titulo: 'Actualizar ventas' } },
          { path: 'detalleVenta/:id', component: DetalleVentaComponent, data: { titulo: 'Actualizar detalleVentas' } },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }

];



export const PAGE_ROUTES = RouterModule.forChild( pagesRoutes );
