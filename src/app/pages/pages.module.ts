import { PAGE_ROUTES } from './pages.routes';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { UsuarioComponent } from './usuarios/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { CategoriaComponent } from './categorias/categoria.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { VentaComponent } from './ventas/venta.component';
import { VentasComponent } from './ventas/ventas.component';
import { DetalleVentaComponent } from './detalleVentas/detalleVenta.component';
import { DetalleVentasComponent } from './detalleVentas/detalleVentas.component';
import { PipesModule } from '../pipes/pipes.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        UsuarioComponent,
        UsuariosComponent,
        ArticuloComponent,
        ArticulosComponent,
        CategoriaComponent,
        CategoriasComponent,
        VentaComponent,
        VentasComponent,
        DetalleVentaComponent,
        DetalleVentasComponent,
        RxjsComponent,
        ProfileComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PAGE_ROUTES,
        PipesModule
    ]
})
export class PagesModule { }
