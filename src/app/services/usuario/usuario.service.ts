import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';


import * as swal from 'sweetalert';



@Injectable()
export class UsuarioService {

  totalUsuarios: Number = 0;
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router,
    public _subirArchivoService: SubirArchivoService
  ) {
    this.cargarStorage();
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  guardarStorage( id: string, token: string, usuario: Usuario ) {

    localStorage.setItem('id', id );
    localStorage.setItem('token', token );
    localStorage.setItem('usuario', JSON.stringify(usuario) );

    this.usuario = usuario;
    this.token = token;
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login( usuario: Usuario, recordar: boolean = false ) {
    if (recordar) {
      localStorage.setItem('login', usuario.login );
    } else {
      localStorage.removeItem('login');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
                .map( (resp: any) => {

                  this.guardarStorage( resp.id, resp.token, resp.usuario );

                  return true;
                });
  }

  cargarUsuarios() {
    let url = URL_SERVICIOS + '/usuario';

    return this.http.get( url )
            .map((resp: any) => {
              this.totalUsuarios = resp.total;
              return resp.usuarios;
            });

  }

  cargarUsuario( id: string ) {
    let url = URL_SERVICIOS + '/usuario/' + id;

    return this.http.get(url)
                .map((resp:any) => resp.usuario);
  }

  buscarUsuarios( termino: string ) {
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get(url)
                .map((resp: any) => resp.usuarios);
  }

  crearUsuario( usuario: Usuario) {
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario);
  }

  actualizarUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario/' + usuario._id;
    url += '?token=' + this.token;

    return this.http.put( url, usuario )
                .map( (resp: any) => {

                  // this.usuario = resp.usuario;
                  let usuarioDB: Usuario = resp.usuario;
                  this.guardarStorage( usuarioDB._id, this.token, usuarioDB );
                  swal('Usuario Actualizado', usuario.nombre, 'exito' );

                  return true;
                });

  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( ( resp: any ) => {

            this.usuario.img = resp.usuario.img;
            swal( 'Imagen Actualizada', this.usuario.nombre, 'success' );
            this.guardarStorage( id, this.token, this.usuario );

          })
          .catch( resp => {
            console.log( resp );

          });

  }

  borrarUsuario( id: string ) {

    let url = URL_SERVICIOS + '/usuario/' + id;
    url += '?token=' + this.token;

    return this.http.delete( url )
              .map( resp => {
                swal( 'Usuario Borrado', 'Usuario borrado correctamente', 'success' );
                return resp;
              });

  }


  guardarUsuario( usuario: Usuario ) {

    let url = URL_SERVICIOS + '/usuario';

    if ( usuario._id ) {
      // actualizando
      url += '/' + usuario._id;
      url += '?token=' + this.token;

      return this.http.put( url, usuario )
                .map( (resp: any) => {
                  swal('Usuario Actualizado', usuario.nombre, 'success');
                  return resp.usuario;

                });

    } else {
      // creando
      url += '?token=' + this.token;
      return this.http.post( url, usuario )
              .map( (resp: any) => {
                swal('Médico Creado', usuario.nombre, 'success');
                return resp.usuario;
              });
    }




  }


}
