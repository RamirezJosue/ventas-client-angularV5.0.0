import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {
  SidebarService,
  SharedService,
  UsuarioService,
  ArticuloService,
  CategoriaService,
  VentaService,
  DetalleVentaService,
  LoginGuardGuard,
  SubirArchivoService
 } from './service.index';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    SidebarService,
    SharedService,
    UsuarioService,
    ArticuloService,
    CategoriaService,
    VentaService,
    DetalleVentaService,
    LoginGuardGuard,
    SubirArchivoService
  ],
  declarations: []
})
export class ServiceModule { }
