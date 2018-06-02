import { RouterModule, Routes } from '@angular/router';

// Componentes
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArticulosComponent } from './articulos/articulos.component';

import { UsuarioComponent } from './usuarios/usuario.component';
import { ArticuloComponent } from './articulos/articulo.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
          { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
          { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress'} },
          { path: 'graficas1', component: Graficas1Component, data: {titulo: 'Grafica'} },

        //   Matenimiento
          { path: 'usuarios', component: UsuariosComponent, data: {titulo: 'Mantemiento de Usuarios'} },
          { path: 'articulos', component: ArticulosComponent, data: { titulo: 'Mantemiento de Articulos' } },
          { path: 'usuario/:id', component: UsuarioComponent, data: { titulo: 'Actualizar Usuario' } },
          { path: 'articulo/:id', component: ArticuloComponent, data: { titulo: 'Actualizar Articulo' } },
          { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }

];



export const PAGE_ROUTES = RouterModule.forChild( pagesRoutes );
